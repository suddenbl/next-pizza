import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-8">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 6,
                    name: 'Чизбургер-Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: 'Чизбургер-Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: 'Чизбургер-Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 9,
                    name: 'Чизбургер-Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 10,
                    name: 'Чизбургер-Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={0}
              />

              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер-Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Чизбургер-Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Чизбургер-Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Чизбургер-Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Чизбургер-Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
