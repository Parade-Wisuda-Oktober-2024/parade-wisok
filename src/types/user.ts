export const users = [
  {
    id: "1a2b3c4d-5e6f-7g8h-9i10-j11k12l13m14",
    name: "John Doe",
    email: "john.doe@example.com",
    emailVerified: new Date("2023-06-15"),
    image: "https://example.com/images/john.jpg",
    username: "johndoe123",
    password: "hashedpassword1",
    nim: 123456789,
    major: "Meteorologi",
    faculty: "FITB",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-05-01"),
  },
  {
    id: "2b3c4d5e-6f7g-8h9i-10j11-k12l13m14n15",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    emailVerified: null,
    image: "https://example.com/images/jane.jpg",
    username: "janesmith456",
    password: "hashedpassword2",
    nim: 987654321,
    major: "Oseanografi",
    faculty: "FITB",
    createdAt: new Date("2023-02-10"),
    updatedAt: new Date("2023-05-12"),
  },
];

// Definisikan tipe UserPrivate secara manual
export type UserPrivate = {
  id: string;
  name: string;
  email: string | null;
  emailVerified: Date | null;
  image?: string; 
  username: string;
  password: string;
  nim: number;
  major: string;
  faculty: string;
  createdAt: Date;
  updatedAt: Date;
};

export type UserPublic = Omit<
  UserPrivate,
  "updatedAt" | "createdAt" | "email" | "emailVerified" | "password"
>;
