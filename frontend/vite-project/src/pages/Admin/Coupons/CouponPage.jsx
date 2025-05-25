import { Button, Table, message, Popconfirm, Space } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CouponPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: "Kupon Kodu",
      dataIndex: "code",
      key: "code",
      render: (code) => <b>{code}</b>,
    },
    {
      title: "İndirim oranı",
      dataIndex: "discountPercent",
      key: "discountPercent",
      render: (code) => <span>%{code}</span>,
    },

    {
      title: "İşlemler",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            onClick={() => navigate(`/admin/coupons/update/${record._id}`)}
          >
            Düzenle
          </Button>
          <Popconfirm
            title="Kupon kodunu Sil"
            description="Kupon kodunu silmek istediğinizden emin misiniz?"
            okText="Evet"
            cancelText="Hayır"
            onConfirm={() => DeleteCoupon(record._id)}
          >
            <Button type="primary" danger>
              Sil
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  //**************** apiURL kullanmadım direkt localhost5000 yazdım ******************
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/coupons`);

      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else {
        message.error("Veri getirme başarısız.");
      }
    } catch (error) {
      console.log("Veri hatası:", error);
    } finally {
      setLoading(false);
    }
  };

  const DeleteCoupon = async (couponId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/coupons/${couponId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        message.success("Kupon başarıyla silindi ");
        fetchCategories();
      } else {
        message.error("Silme işlemi başarısız.");
      }
    } catch (error) {
      console.log("Silme hatası:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey={(record) => record._id}
      loading={loading}
    />
  );
};

export default CouponPage;
