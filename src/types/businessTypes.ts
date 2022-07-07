export type Address = {
  city: string;
  country: string;
  number: string;
  street: string;
  zip: string;
};

export type businessProps = {
  id: string;
  name: string;
  description: string;
  image: string;
  email: string;
  address: Address;
  phone: string;
};
