// src/pages/page.tsx
import React from "react";
import FAQItem from "./FAQitem";
import {
  Accordion,
} from "../ui/accordion";

const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: "Apa itu TA-Fair?",
      answer:
        "TA-Fair adalah halaman yang menampilkan daftar Tugas Akhir (TA) dari wisudawan. Pengguna dapat melihat detail TA, melacak perkembangan TA tertentu, dan memberikan tanda suka pada TA yang mereka anggap menarik.",
      value: "item-1"
    },
    {
      question: "Bagaimana cara melacak Tugas Akhir di TA-Fair?",
      answer:
        "Pengguna dapat melacak Tugas Akhir dengan mencari nama wisudawan, judul TA, atau kata kunci tertentu di kolom pencarian. Setelah menemukan TA yang diinginkan, pengguna dapat menambahkan TA tersebut ke daftar pantauan.",
      value: "item-2"
    },
    {
      question: "Apa itu WoA (Wisuda of Appreciation)?",
      answer:
        "WoA adalah halaman khusus dimana pengguna dapat mengirimkan pesan apresiasi kepada wisudawan. Pesan dapat dikirimkan dengan menyertakan nama, NIM, dan jurusan wisudawan. Pesan apresiasi ini juga dapat dikirim secara anonim.",
      value: "item-3"
    },
    {
      question: "Apakah pesan yang dikirim melalui WoA dapat diubah setelah dikirim?",
      answer:
        "Sayangnya, pesan yang sudah dikirim melalui WoA tidak dapat diubah atau dihapus. Pastikan pesan yang Anda tulis sudah benar sebelum dikirimkan.",
      value: "item-4"
    },
    {
      question: "Apakah saya bisa memberikan apresiasi kepada lebih dari satu wisudawan di WoA?",
      answer:
        "Ya, pesan apresiasi tidak memiliki batas dalam pengiriman pesan terhadap wisudawan. Dengan itu, Anda dapat mengirim sebanyak-banyaknya apresiasi yang Anda inginkan. Cukup masukkan detail wisudawan yang dituju di setiap pesan.",
      value: "item-6"
    },
    {
      question: "Apakah saya perlu membuat akun untuk mengakses fitur di website ini?",
      answer:
        "Tidak, pengguna tidak perlu membuat akun untuk menggunakan fitur di website ini. Anda dapat melihat, melacak, dan menyukai TA langsung tanpa akun.",
      value: "item-7"
    },
    {
      question: "Bagaimana saya dapat membeli merchandise di halaman merchant?",
      answer:
        "Di halaman merchant, Anda dapat melihat berbagai merchandise dari Parade Wisuda Oktober 2024. Jika Anda tertarik, Anda bisa langsung menghubungi bagian fundraising Parade Wisuda Oktober 2024 melalui kontak yang tersedia di halaman tersebut.",
      value: "item-5"
    },
  ];

  return (
    <main className="z-10 flex h-max w-[95%] flex-col items-center md:w-screen">
      <Accordion className="w-full flex flex-col items-center" type="single" collapsible>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} value={faq.value}/>
        ))}
      </Accordion>
    </main>
  );
};

export default FAQPage;