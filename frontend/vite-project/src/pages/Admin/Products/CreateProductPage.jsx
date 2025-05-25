import { Form, Input, InputNumber, Spin, message, Select, Button } from "antd";
import { useEffect, useState } from "react";

const CreateProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const [form] = Form.useForm();

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/api/categories`);

        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  },[]);

  const onFinish = async (values) => {
    console.log(values);
    const imgLinks = values.img.split("\n").map((link)=>link.trim());
    const colors = values.colors.split("\n").map((link)=>link.trim());
    const sizes = values.sizes.split("\n").map((link)=>link.trim());

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...values,
            price:{
                current:values.current,
                discount:values.discount
            },
            colors,
            sizes,
            img: imgLinks,
        }),
      });

      if (response.ok) {
        message.success("Ürün başarıyla oluşturuldu.");
        form.resetFields();
      } else {
        message.error("Ürün oluşturulurken bir hata oluştu.");
      }
    } catch (error) {
      console.log("Ürün oluşturma hatası:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <Form name="basic" layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          label="Ürün İsmi"
          name="name"
          rules={[
            {
              required: true,
              message: "Lütfen Ürün adını girin!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ürün Kategorisi"
          name="category"
          rules={[
            {
              required: true,
              message: "Lütfen  1 kategori seçiniz",
            },
          ]}
        > 
          <Select>
            {categories.map((category) => (
              <Select.Option value={category._id} key={category._id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Fiyat"
          name="current"
          rules={[
            {
              required: true,
              message: "Lütfen ürün  fiyatını giriniz",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="İndirim oranı (%)"
          name="discount"
          rules={[
            {
              required: true,
              message: "Lütfen bir ürün indirim oranı giriniz",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Ürün Açıklaması"
          name="description"
          rules={[
            {
              required: true,
              message: "Lütfen bir ürün açıklaması  giriniz",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Ürün açıklamasını girin"
            autoSize={{ minRows: 6 }}
            style={{ backgroundColor: "white" }}
          />
        </Form.Item>

        <Form.Item
          label="Ürün Görselleri (Linkler)"
          name="img"
          rules={[
            {
              required: true,
              message: "Lütfen en az 4 ürün görsel linki giriniz",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Her bir görsel linkini bir satıra yazın."
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>

        <Form.Item
          label="Ürün Renkleri  (RGB kodları)"
          name="colors"
          rules={[
            {
              required: true,
              message: "Lütfen en az 1 ürün rengi giriniz",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Her bir RGB kodunu yeni bir satıra yazın."
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>

        <Form.Item
          label="Ürün Bedenleri"
          name="sizes"
          rules={[
            {
              required: true,
              message: "Lütfen en az 1 ürün beden ölçüsü giriniz",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Her bir beden ölçüsünü yeni bir satıra yazın."
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Oluştur
        </Button>
      </Form>
    </Spin>
  );
};

export default CreateProductPage;
