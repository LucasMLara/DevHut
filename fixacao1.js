const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = ({
  name: fullName,
  phoneNumber,
  address: { street, number, apartment },
  order: {
    delivery: { deliveryPerson },
  },
}) => {
  // const {deliveryPerson} = order.order.delivery;
  // const {name,phoneNumber} = order;
  // const {street,number,apartment} = order.address;

  console.log(
    `Olá ${deliveryPerson}, entrega para: ${fullName}, Telefone: ${phoneNumber},  ${street}, Nº ${number}, AP: ${apartment}`
  );
};

customerInfo(order);

// const orderModifier = (order) => {

// }

// orderModifier(order);
