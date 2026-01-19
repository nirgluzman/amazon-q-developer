type Email = `${string}@${string}.${string}`;

type Employee = {
  name: string;
  position: string;
  department: string;
  startDate: Date;
  email: Email;
  isActive: boolean;
};

const john: Employee = {
  name: 'John Doe',
  position: 'Software Engineer',
  department: 'Development',
  startDate: new Date('2022-01-15'),
  email: 'john.doe@example.com',
  isActive: true,
};
