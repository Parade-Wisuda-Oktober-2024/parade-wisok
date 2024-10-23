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
  },
  {
    name: "Muhammad Maulvi Mirza Chairat",
    nim: "13619111",
    major: "Teknik Dirgantara",
    campus: "Ganesha",
    faculty: "FTMD",
    fileLink: "https://drive.google.com/drive/folders/1lKdfqOJXe_YE5hPJYVT8TLX_5EXt_KtG",
    title: "Fully Plastic J-Integral of Crack in Residual Stress Fields of Aluminum Welded Joints",
    abstrak: "Aluminum alloys are widely used in aerospace, automotive, and construction industries due to their strength and lightweight properties. However, welding introduces residual stresses that can undermine the structural integrity and lifespan of welded components. This study investigates the effects of these residual stresses on crack behavior in aluminum welded joints, extending the traditional J-integral framework, originally developed for linear elastic fracture mechanics, to fully plastic conditions using the EPRI scheme. The Ramberg-Osgood plasticity model was employed to describe the material's nonlinear stress-strain behavior. The results reveal that high residual stresses from welding significantly increase the values of the Elastic-Plastic, Elastic, and Fully Plastic J-Integrals. These high stresses may push the material into plastic deformation, particularly when the stresses exceed the yield point. In contrast, materials subjected to low loads, below the yield strength and without residual stress, show little to no value of Plastic J-Integral. This research aims to understand the crack in welded joints, enabling more accurate predictions of crack growth and structural service life. By providing a deeper insight into how residual stresses influence crack behavior and plastic deformation, this work aids in developing more effective strategies to ensure the structural integrity of welded components, ultimately enhancing the safety, durability, and efficiency of critical structures."
  },
  {
    name: "Reyna Aszzura Rasyida",
    nim: "19021177",
    major: "Manajemen",
    campus: "Ganesha",
    faculty: "SBM",
    fileLink: "https://drive.google.com/drive/folders/13H3OjQKCvF4bdhxzGfQJEaWxLMhQhZEk",
    title: "The Influence of Marketing MIX and Students' Sense of Belonging on Purchase Intention for ITB Press Merchandise mediated by Attitude",
    abstrak: "During its two years of establishment, the company Press has put effort into merchandising business, becoming a merchandise provider. However, a liability developing its 'TB's official merchandise' has resulted in struggles with low sales and awareness among students. This study examines the reasons behind students' and alumni purchase intentions by using the 4Ps of the marketing mix (product, price, place) and students' sense of belonging as predictors, mediated by attitude. A comprehensive quantitative approach with path analysis on SPSS was conducted to analyze the relationship between variables. By distributing questionnaires, 221 respondents consisting of ITB active students and alumni were gathered for this research. The findings show that, except for place, all predictors significantly influence purchase intention, with attitudes serving as a mediating variable. The study also reveals that ITB Press merchandise has a positive product perception among students. The primary motivation for purchasing merchandise is the students' pride and connection with ITB and the product itself, with most attention on the design, quality, and variety. Consequently, ITB Press should focus on creating appealing products that fit student preferences to maintain the positive perception while balancing price and promotions. This study highlights the importance of understanding the motivations and perceptions of both students and alumni, providing valuable insights for ITB Press to refine their marketing approach."
  },
  {
    name: "Ryanditto Wibisono",
    nim: "13620016",
    major: "Teknik Dirgantara",
    campus: "Ganesha",
    faculty: "FTMD",
    fileLink: "https://drive.google.com/drive/folders/1F75fKcdAIMBHk_rIaqaBql4UCOz4qp8X",
    title: "Delay Propagation Analysis Of Indonesia’s Air Transport Network Through Transfer Entropy Approach",
    abstrak: "The Indonesian air transport network serves as a pivotal element of both the global economy and society, facilitating the movement of millions of passengers and cargo worldwide. Delays within this network result in substantial financial losses for airlines and pose safety risks. Given its vast archipelago and strategic geographical positioning, Indonesia plays a critical role in the regional air transport landscape. Consequently, a detailed examination of delay propagation within the Indonesian Air Transport Network is essential. This study employs a transfer entropy approach to scrutinize the spread of delays across the network, utilizing a complex network framework. The focus is on domestic flights scheduled within Indonesia in 2018. The analysis is conducted using topological tools and Gephi software, which aid in identifying pivotal routes and airports that substantially influence network disruptions. The findings reveal that delay propagation within the Indonesian Air Transport Network is significantly influenced by its hub-and-spoke structure, indicating that disruptions at central hubs can lead to extensive network-wide effects. Interestingly, isolated regions display distinct delay characteristics, suggesting that delays typically spread from larger hubs to smaller airports. Effective mitigation of delays necessitates focused interventions at crucial hubs and routes, especially those with high transfer entropy values, to enhance network efficiency and reliability."
  },
  {
    name: "Valentino Jonathan Adiyassa",
    nim: "11220038",
    major: "Rekayasa Hayati",
    campus: "Jatinangor",
    faculty: "SITH-R",
    fileLink: "https://drive.google.com/drive/folders/1AjEDRfurqYPdA54z-RPAqIKnRHI1Zn-7",
    title: "Pengaruh Fermentasi Substrat Padat Menggunakan Aspergillus sojae terhadap Kandungan dan Bioaktivitas Peptida Bioaktif dari Kernel Biji Karet (Hevea brasiliensis)",
    abstrak: "Indonesia sebagai negara agraris menghasilkan limbah pertanian sebanyak 73 juta ton/tahun dan sebanyak 20,2% diantaranya merupakan biji karet. Kernel biji karet memiliki kadar protein yang tinggi yang dapat ditingkatkan melalui proses fermentasi dengan bantuan Aspergillus sojae. Penelitian ini bertujuan untuk menentukan pengaruh perlakuan fermentasi terhadap kadar protein kasar, perolehan ekstrak protein kernel biji karet, komposisi asam amino, dan bioaktivitas hidrolisat dari kernel biji karet. Fermentasi substrat padat dilakukan pada variasi waktu 24, 48, 72, 96, 120, 144, dan 168 jam, dengan pertumbuhan Aspergillus sojae sebesar 0,004/jam. Kandungan protein kasar tertinggi terdapat pada hari ke-5 sebesar 48,08% dengan nilai protein recovery tertinggi sebesar 42,55% pada hari ke-5. Hidrolisis protein dilakukan dengan enzim bromelain dengan nilai derajat hidrolisis sebesar 81,46%. Komposisi asam amino tertinggi penyusun kernel biji karet adalah arginin (12,18%), asam aspartat (9,38%), dan asam glutamat (13,66%). Proses fermentasi mampu menurunkan berat molekul ekstrak dari 21-65 kDa menjadi 15-43 kDa serta molekul hidrolisat dari 38-46 kDa menjadi 21-35,3 kDa. Aktivitas antioksidan tertinggi ada pada hari ke-5 fermentasi dengan nilai IC50 sebesar 452,6 ppm. Nilai IC50 aktivitas antiinflamasi juga ditemukan paling rendah pada hari ke-5 fermentasi yaitu 226,63 ppm. Sementara itu, aktivitas antioksidan tertinggi untuk bakteri E. coli dan S. aureus ditemukan pada hari ke-5 dengan zona inhibisi berturut-turut sebesar 0,73 cm dan 0,64 cm. Dalam penelitian ini diperoleh bahwa proses fermentasi berpengaruh secara signifikan terhadap konsentrasi protein serta bioaktivitas yang dihasilkan."
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
