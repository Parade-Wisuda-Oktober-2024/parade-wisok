import {PrismaClient} from "@prisma/client";
import {hash} from "bcrypt";

const prisma = new PrismaClient();

const users = [
  {
    name: "Aniesah Akhyar",
    nim: "10219033",
    major: "Fisika",
    campus: "Ganesha",
    faculty: "FMIPA",
    fileLink: "https://drive.google.com/drive/folders/1lKdfqOJXe_YE5hPJYVT8TLX_5EXt_KtG",
    title: "Analisis Muatan Harmonika, Forman, Dan Voice Onset Time (VOT) Pada Pelafalan Fonem Berbahasa Indonesia",
    abstrak: "Fonetik akustik dalam kajian bunyi bahasa berkaitan erat dengan faktor-faktor biologis sistem alat ucap yang membedakan warna suara. Perbedaan timbre setiap orang dapat ditelaah melalui karakteristik gelombang akibat peristiwa tutur. Analisis keunikan timbre pada penelitian ini didasarkan pada parameter-parameter fisik seperti frekuensi dasar dan resonansi serta durasi pengucapan suatu bunyi. Percobaan yang dilakukan bertujuan untuk karakterisasi muatan harmonik subjek pengguna bahasa Indonesia, pemetaan forman vokal [a], [e], [ə], [i], [o], dan [u] secara murni dan dengan pengaruh konsonan, serta observasi waktu pelepasan bunyi hambat [k] dan [t]. Sepuluh subjek laki-laki dan perempuan berusia 21—23 tahun memberikan sampel suara mereka melalui perekaman setiap fonem vokal selama sekitar 2 detik serta kata-kata [sore], [ini], [kə], dan [utara] sebanyak 4 kali pengulangan. Data suara diolah menggunakan perangkat lunak Praat 6.3.07. Dihasilkan sinyal akustik dan spektogram yang kemudian diolah untuk mendapatkan parameter-parameter yang dicari. Muatan harmonik didapatkan dari kurva spektrum, nilai-nilai forman dari spektogram, dan durasi bunyi dari sinyal akustik dan spektogram. Diperoleh keseluruhan muatan harmonik bagi subjek perempuan berada di rentang frekuensi yang lebih tinggi dari laki-laki karena panjang saluran suara yang lebih pendek. Nilai rerata f1 untuk perempuan 225.5 Hz dan laki-laki 112.2 Hz. Frekuensi resonansi pembunyian vokal dengan penyertaan bunyi konsonan mengubah persebaran data pada bagan vokal terutama untuk bunyi [ə], [o], dan [u]. Hal ini dipengaruhi oleh peristiwa artikulasi. Adapun durasi pelepasan bunyi hambat [k] lebih lama daripada [t] untuk seluruh subjek karena titik artikulasi berada di bagian belakang di dalam rongga mulut, yaitu velar."
  },
  {
    name: "Azarya Adirama",
    nim: "10520004",
    major: "Teknik dan Pengelolaan Sumber Daya Air",
    campus: "Ganesha",
    faculty: "FTSL",
    fileLink: "https://drive.google.com/drive/folders/1AWbt7aS2qEb5CXD6Y9iJV397ws3IIBoT",
    title: "Perencanaan Pengendalian Banjir Sungai Palast Kecamatan Rumbai, Kota Pekanbaru, Provinsi Riau",
    abstrak: "Sungai Palas merupakan anak sungai dari Sungai Siak yang berada di Kota Pekanbaru, Provinsi Riau. Banjir yang terjadi di Sungai Palas disebabkan Oleh curah hujan yang tinggi serta adanya pengaruh pasang dari Sungai Siak. Oleh sebab itu, perlu adanya solusi yang dapat mereduksi banjir yang terjadi di sekitar Sungai Palas. Pada tugas akhir init dilakukan analisis hidrologi menggunakan perangkat lunak Microsoft Excel dan analisis hidraulika menggunakan perangkat lunak HEC- QAS berupa pemodelan satu dimensi yang meliputi penampang sungai, tinggi banjir, dan simulasi hasil bangunan pengendali banjir yang direncanakan. Adapun pemodelan yang dilakukan mulai dari kondisi eksistingt dilanjutkan dengan berbagai skenario solusi seperti normalisasi. normalisasi dan tanggul, serta normalisasi dan kolam retensi. Dengan mempertimbangkan efektivitas, kemungkinan pelaksanaan, dan biaya, dipilih solusi berupa normalisasi dan tanggul. Total biaya untuk melaksanakan normalisasi dan tanggul adalah sebesar sepuluh miliar lima ratus tujuh puluh empat juta empat ratus tiga puluh ribu enam ratus dua puluh empat rupiah. Dengan adanya normalisasi dan tanggul, diharapkan dapat menjadi solusi dari permasalahan banjir dari luapan Sungai Palas."
  },
  {
    name: "Mikael Tristan Aristo",
    nim: "15220039",
    major: "Arsitektur",
    campus: "Ganesha",
    faculty: "SAPPK",
    fileLink: "https://drive.google.com/drive/folders/10Lj1KprbzAEc97zuKsQsY2Vdh9oR5dGs",
    title: "Spatial Immersion for Contemplative Practices and Well-Being in Urban Transportation Node",
    abstrak: "Mindful mobility is an idea aimed to heal humanity's well being state as much as it possibly can within the urban fabric. Healing itself need to be done as it affects urban dwellers life, in both small and large scale. In order to reach as much people as it possibly can, the idea itself presented in a form of architecture that's essential to urban people's life. Public transport infrastructure, the essential one, designed to create an immersive spatial quality to engage, enhance, and sustain contemplation within it's user mobilization activity without disrupting their physical pace. Spatial experience is designed to evoke thoughts that leads to a contemplative state within a person. The image spatial quality of childhood happy or special place is presented as it is the most relatable within human's journey. This project will redesign Sudirman KRL (electric train) Station in Jakarta, Indonesia. The station is located in the most busiest business district within one of the most stressful city to life in. KRL itself is the most used mass public transportation by far. With this combination, it is one of the most used space within KRL Sudirman Station is part of the country. Indonesia's first transit development area connecting multiple public transportation modes within the area."
  }
]

async function main() {
  const hPassword = await hash("password", 10);
  await prisma.like.deleteMany();
  await prisma.tA.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();

  const usersP = await prisma.user.createManyAndReturn({
    data: users.map((user) => {
      return {
        nim: user.nim,
        passwordHash: hPassword,
      }
    })
  })

  const profilesP = await prisma.profile.createMany({
    data: usersP.map((user) => {
      return {
        userId: user.id,
        name: users.find((u) => u.nim === user.nim)?.name ?? "Unknown",
        major: users.find((u) => u.nim === user.nim)?.major,
        campus: users.find((u) => u.nim === user.nim)?.campus,
        faculty: users.find((u) => u.nim === user.nim)?.faculty,
      }
    })
  })

  const taP = await prisma.tA.createMany({
    data: usersP.map(({id, nim}) => {
      return {
        wisudawanId: id,
        abstrak: users.find((u) => u.nim === nim)?.abstrak ?? "Abstrak",
        title: users.find((u) => u.nim === nim)?.title ?? "Title",
        fileLink: users.find((u) => u.nim === nim)?.fileLink ?? "Unknown",
      }
    })
  })

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
