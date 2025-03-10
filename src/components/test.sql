INSERT INTO category (name) 
VALUES 
    ('Supplements'),
    ('Teas'),
    ('SkinCare'),
    ('HairCare'),
    ('BodyCare')

select * from category

INSERT INTO product (name, price, description, image, rating, category, origen, stock, stock_min, date_update,benefits, ingredients)
    VALUES
    ('Suplemento Natural de Vitaminas', 25.99, 'Suplemento herbal rico en vitaminas naturales que ayudan a fortalecer el sistema inmunitario y la salud general.', '/images/vitamin-supplement.jpg', 4.7, (select id from category where name = 'Supplements'), 'Producción orgánica', 50, 5, '2024-03-15','{"benefits":[{ "name": "Fortalecimiento inmunitario", "description": "Rich in natural vitamins that boost immunity."}, { "name": "Mejora de la salud general", "description": "Improves overall health and well-being." }
        ]}','{"ingredients":[{ "name": "Extracto de frutos rojos", "quantity": "300mg" }, { "name": "Vitamina C natural", "quantity": "200mg" }]}'),
    ('Té Natural de Relajación', 18.99, 'Té herbal natural con ingredientes relajantes que ayudan a desconectar y descansar.', '/images/relaxing-herb-tea.jpg', 4.6, (select id from category where name = 'Teas'), 'Producción local orgánica', 80, 10, '2024-03-12','{"benefits":[{ "name": "Relajación natural", "description": "Natural relaxation aid." }, { "name": "Mejora del sueño", "description": "Improves sleep quality." }]}','{"ingredients":[{ "name": "Extracto de valeriana", "quantity": "250mg" }, { "name": "Extracto de lemongrass", "quantity": "200mg" }]}'),
    ('Crema Natural para la Piel', 29.99, 'Crema hidroquinónica natural para el cuidado diario de la piel, con ingredientes puros y seguros.', '/images/skin-cream-natural.jpg', 4.8, (select id from category where name = 'SkinCare'), 'Organic production', 120, 15, '2024-03-14', '{benefits:[{ "name": "Protectora natural", "description": "Natural moisturizer that protects the skin." }, { "name": "Cuidado diario", "description": "Daily skincare support." }]}','{"ingredients":[{ "name": "Extracto de esencia de manzanilla", "quantity": "150mg" },{ "name": "Hidratóricos naturales", "quantity": "100mg" }]}'),
    ('Suplemento de Omega-3 Naturales', 32.99, 'Suplemento natural de aceites omega-3 que ayudan a reducir el estrés y mejorar la salud cardiovascular.', '/images/omega-3-supplement.jpg', 4.5, (select id from category where name = 'Supplements'), 'Importado de fuentes confiables', 70, 7, '2024-03-13', '{"benefits":[
            { "name": "Reducción del estrés", "description": "Helps reduce stress levels." },
            { "name": "Mejora de la salud cardiovascular", "description": "Improves heart health." }
        ]}','{"ingredients":[
            { "name": "Aceite de linaza", "quantity": "1000mg" },
            { "name": "Aceite de nacano", "quantity": "750mg" }
        ]}'),
    ('Gel Natural para el Cabello', 24.99, 'Gel natural para el cabello que estimula el crecimiento y fortalece las raíces.', '/images/hair-gel-natural.jpg', 4.7, (select id from category where name = 'HairCare'), 'Producción certificada orgánica', 90, 9, '2024-03-11','{"benefits":[
            { "name": "Estimulación del crecimiento", "description": "Stimulates hair growth." },
            { "name": "Fortalecimiento del cabello", "description": "Strengthens hair roots." }
        ]}','{"ingredients":[
            { "name": "Extracto de esencia de neem", "quantity": "200mg" },
            { "name": "Extracto de hinojo", "quantity": "150mg" }
        ]}'),
    ('Té Natural de Energía', 19.99, 'Té natural con ingredientes que ayudan a aumentar el energía y mejorar el rendimiento.', '/images/energy-herb-tea.jpg', 4.6, (select id from category where name = 'Teas'), 'Producción local', 80, 8, '2024-03-10', '{"benefits":[
            { "name": "Aumento de la energía", "description": "Increases energy levels." },
            { "name": "Mejora del rendimiento", "description": "Improves performance." }
        ]}', '{"ingredients":[
            { "name": "Extracto de guarana", "quantity": "200mg" },
            { "name": "Caffeine natural", "quantity": "150mg" }
        ]}'),
    ('Crema Natural para el cuerpo', 38.99, 'Crema natural para el cuerpo con nutrientes que ayudan a hidratar y mantener la piel saludable.', '/images/body-cream-natural.jpg', 4.7, (select id from category where name = 'BodyCare'), 'Producción orgánica', 110, 11, '2024-03-09', '{"benefits":[
            { "name": "Hidratación natural", "description": "Natural moisturizer that hydrates the skin." },
            { "name": "Mantenimiento de la piel", "description": "Skin maintenance support." }
        ]}', '{"ingredients":[
            { "name": "Extracto de esencia de rosa", "quantity": "100mg" },
            { "name": "Butter de kapok", "quantity": "150mg" }
        ]}'),
    ('Suplemento Natural de Colineales', 28.99, 'Suplemento natural de colineales que ayudan a aliviar el dolor Articular y mejorar la movilidad.', '/images/collagen-supplement.jpg', 4.5, (select id from category where name = 'Supplements'), 'Importado de fuentes certificadas', 70, 7, '2024-03-08', '{"benefits":[
            { "name": "Alivio del dolor articular", "description": "Relieves joint pain." },
            { "name": "Mejora de la movilidad", "description": "Improves mobility." }
        ]}', '{"ingredients":[
            { "name": "Colineales naturales", "quantity": "1000mg" },
            { "name": "Hidrolizados de colineales", "quantity": "750mg" }
        ]}'),
    ('Té Natural de Limón', 16.99, 'Té natural con sabor a limón que ayuda a aliviar el estrés y mantener un estado de ánimo positivo.', '/images/lemon-herb-tea.jpg', 4.7, (select id from category where name = 'Teas'), 'Producción local orgánica', 90, 9, '2024-03-07', '{"benefits":[
            { "name": "Alivio del estrés", "description": "Helps reduce stress levels." },
            { "name": "Mejora del estado de ánimo", "description": "Improves mood and positivity." }
        ]}', '{"ingredients":[
            { "name": "Extracto de limón", "quantity": "300mg" },
            { "name": "Extracto de jengibre", "quantity": "200mg" }
        ]}'),
    ('Gel Natural para el Cabello y Piel', 34.99, 'Gel natural para el cabello y la piel que contiene ingredientes puros para fortalecer y proteger.', '/images/hair-and-skin-gel.jpg', 4.8, (select id from category where name = 'HairCare'), 'Producción certificada orgánica', 110, 11, '2024-03-06', '{"benefits":[
            { "name": "Fortalecimiento del cabello", "description": "Strengthening hair support." },
            { "name": "Protección de la piel", "description": "Skin protection and repair." }
        ]}', '{"ingredients":[
            { "name": "Extracto de neem", "quantity": "200mg" },
            { "name": "Hidratóricos naturales", "quantity": "150mg" }
        ]}');

-- Insertar múltiples usuarios
INSERT INTO "user" (id, created_at, name, lastname, email, pass_hash, customer_id, role) 
VALUES 
    (gen_random_uuid(), NOW(), 'Juan', 'Pérez', 'juan.perez@example.com', 'hashed_pass_1', 'cus_12345', 'admin'),
    (gen_random_uuid(), NOW(), 'María', 'Gómez', 'maria.gomez@example.com', 'hashed_pass_2', 'cus_67890', 'user'),
    (gen_random_uuid(), NOW(), 'Carlos', 'López', 'carlos.lopez@example.com', 'hashed_pass_3', 'cus_54321', 'cliente'),
    (gen_random_uuid(), NOW(), 'Ana', 'Martínez', 'ana.martinez@example.com', 'hashed_pass_4', 'cus_98765', 'user'),
    (gen_random_uuid(), NOW(), 'Pedro', 'Ramírez', 'pedro.ramirez@example.com', 'hashed_pass_5', 'cus_11223', 'cliente');

-- Insertar múltiples órdenes y obtener los UUID generados
WITH inserted_orders AS (
    INSERT INTO "order" (id, created_at, amount, date_payment, status, user_id) 
    VALUES 
        (gen_random_uuid(), NOW(), 150.00, '2025-02-19', 'pending', (SELECT id FROM "user" OFFSET 0 LIMIT 1)),
        (gen_random_uuid(), NOW(), 200.50, '2025-02-19', 'completed', (SELECT id FROM "user" OFFSET 1 LIMIT 1)),
        (gen_random_uuid(), NOW(), 99.99, NULL, 'pending', (SELECT id FROM "user" OFFSET 2 LIMIT 1)),
        (gen_random_uuid(), NOW(), 300.75, '2025-02-20', 'completed', (SELECT id FROM "user" OFFSET 3 LIMIT 1)),
        (gen_random_uuid(), NOW(), 125.00, NULL, 'pending', (SELECT id FROM "user" OFFSET 4 LIMIT 1)),
        (gen_random_uuid(), NOW(), 175.40, '2025-02-21', 'shipped', (SELECT id FROM "user" OFFSET 0 LIMIT 1)),
        (gen_random_uuid(), NOW(), 90.00, NULL, 'pending', (SELECT id FROM "user" OFFSET 1 LIMIT 1)),
        (gen_random_uuid(), NOW(), 500.99, '2025-02-22', 'completed', (SELECT id FROM "user" OFFSET 2 LIMIT 1))
    RETURNING id
)
-- Insertar múltiples registros en order_product con `sub_amount`
INSERT INTO order_product (id, created_at, quantity, order_id, product_id, sub_amount) 
VALUES 
    (gen_random_uuid(), NOW(), 2, (SELECT id FROM inserted_orders OFFSET 0 LIMIT 1), 'UUID_PRODUCT_1', 50.00),
    (gen_random_uuid(), NOW(), 1, (SELECT id FROM inserted_orders OFFSET 0 LIMIT 1), 'UUID_PRODUCT_2', 25.00),
    (gen_random_uuid(), NOW(), 3, (SELECT id FROM inserted_orders OFFSET 1 LIMIT 1), 'UUID_PRODUCT_3', 75.00),
    (gen_random_uuid(), NOW(), 5, (SELECT id FROM inserted_orders OFFSET 2 LIMIT 1), 'UUID_PRODUCT_4', 125.00),
    (gen_random_uuid(), NOW(), 4, (SELECT id FROM inserted_orders OFFSET 2 LIMIT 1), 'UUID_PRODUCT_5', 100.00),
    (gen_random_uuid(), NOW(), 6, (SELECT id FROM inserted_orders OFFSET 3 LIMIT 1), 'UUID_PRODUCT_1', 150.00),
    (gen_random_uuid(), NOW(), 2, (SELECT id FROM inserted_orders OFFSET 4 LIMIT 1), 'UUID_PRODUCT_3', 50.00),
    (gen_random_uuid(), NOW(), 3, (SELECT id FROM inserted_orders OFFSET 5 LIMIT 1), 'UUID_PRODUCT_4', 75.00),
    (gen_random_uuid(), NOW(), 7, (SELECT id FROM inserted_orders OFFSET 6 LIMIT 1), 'UUID_PRODUCT_5', 175.00),
    (gen_random_uuid(), NOW(), 1, (SELECT id FROM inserted_orders OFFSET 7 LIMIT 1), 'UUID_PRODUCT_2', 25.00),
    (gen_random_uuid(), NOW(), 5, (SELECT id FROM inserted_orders OFFSET 7 LIMIT 1), 'UUID_PRODUCT_3', 125.00);

CREATE OR REPLACE FUNCTION create_order_with_products(p_user_id uuid, p_amount numeric, p_items jsonb, p_status text, p_payment_id text, p_currency text, p_payment_method text, p_refund_status text, p_receipt_url text)
DECLARE
  order_id UUID;
  item JSONB;
  product_record RECORD;
BEGIN
  -- 1. Crear la orden
  INSERT INTO "order" (user_id, amount, status, date_payment)
  VALUES (p_user_id, p_amount, p_status, NOW())
  RETURNING id INTO order_id;

  -- 2. Validar y procesar cada producto
  -- Validar estructura de p_items
  IF jsonb_typeof(p_items) != 'array' THEN
    RAISE EXCEPTION 'p_items debe ser un array JSON';
  END IF;
  
  FOR item IN SELECT * FROM jsonb_array_elements(p_items) LOOP
    -- Verificar producto
    SELECT id, price INTO product_record 
    FROM product 
    WHERE id = (item->>'id')::UUID
      AND active = TRUE;

    IF NOT FOUND THEN
      RAISE EXCEPTION 'Producto % no existe o está inactivo', (item->>'id')::UUID;
    END IF;

    -- Validar precio
    IF (item->>'price')::FLOAT != product_record.price THEN
      RAISE EXCEPTION 'Precio del producto % no coincide', (item->>'id')::UUID;
    END IF;

    -- Insertar relación
    INSERT INTO order_product (
      order_id,
      product_id,
      quantity,
      sub_amount
    ) VALUES (
      order_id,
      product_record.id,
      (item->>'quantity')::INTEGER,
      (item->>'quantity')::INTEGER * product_record.price * 100
    );
  END LOOP;

  INSERT INTO "order_stripe" (order_id, payment_id, payment_method, currency, refund_status, receipt_url)
  VALUES (order_id, p_payment_id, p_payment_method, p_currency, p_refund_status, p_receipt_url);

  UPDATE "user" SET customer_id = p_customer WHERE id = p_user_id;

  RETURN order_id;

EXCEPTION
  WHEN others THEN
    RAISE;  
END;
