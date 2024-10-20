import { TADetailLayout } from "../wrapper";
import Image from "next/image";


const Page = () => {
    return (
    <main>
        <div className="relative inset-0 bg-[url('/tafair.png')] z-0 bg-cover bg-center bg-no-repeat min-h-screen size-110%">

            <div className="relative flex flex-col flex-1 items-center justify-center p-5"> {/* container */}

                {/* BACK BUTTON */}
                <section className="flex w-full items-start justify-start">

                    <div className="flex flex-grow justify-start items-start">
                        <div className="flex space-x-2 my-3">
                            <Image
                                src={'/arrow-back-ios.svg'}
                                alt = {'/arrow-back-ios.svg'}
                                width={20}
                                height={20}
                            />
                            <div className="font-serif text-xl">
                                Back
                            </div>
                        </div>
                    </div>
                </section>

                {/* TA DETAIL */}
                <section>
                    
                    <div className="my-3.5 justify-center items-center flex-col">
                        <TADetailLayout
                            judulTA = {"ADOPSI KENDARAAN LISTRIK UNTUK JARINGAN MANAJEMEN RANTAI PASOKAN : SEBUAH TINJAUAN DAN AGENDA PENELITIAN"}
                            penulisTA = {"Muhammad Fadhlan Armon"}
                            jurusanPenulis = {"Manajemen"}
                            jumlahLove = {"6"}
                            contentAbstrak = {"Adopsi kendaraan listrik (EV) dalam jaringan manajemen rantai pasok menawarkan banyak manfaat seperti peningkatan efisiensi operasional dalam hal biaya, mengurangi emisi karbon dan mengurangi penggunaan bahan bakar fosil serta mengurangi waktu pengiriman karena mampu memberikan akselerasi yang lebih cepat sehingga memungkinkan pengambilan dan pengiriman yang lebih cepat. Penelitian ini bertujuan untuk menganalisis adopsi kendaraan listrik untuk jaringan manajemen rantai pasokan termasuk potensi, tantangan, dan penelitian di masa depan untuk jaringan manajemen rantai pasokan. Metode yang digunakan dalam penelitian ini adalah tinjauan literatur sistematis oleh Tranfield et al 2003 untuk menyajikan pemahaman yang komprehensif dan obyektif tentang topik penelitian yang diteliti. Hasil dari penelitian ini menunjukkan bahwa penggunaan kendaraan listrik dapat meminimalkan biaya logistik melalui efisiensi bahan bakar, pengereman regeneratif, dan optimalisasi energi. Selain itu, EV berkontribusi terhadap keberlanjutan dengan mengurangi emisi karbon. Secara keseluruhan, adopsi kendaraan listrik memberikan peluang untuk inovasi dan optimalisasi dalam jaringan manajemen rantai pasokan. Namun, ada beberapa tantangan yang perlu diatasi, seperti cakupan yang terbatas, infrastruktur pengisian daya yang belum sepenuhnya berkembang, biaya awal yang lebih tinggi, serta perubahan kebijakan dan peraturan. Manajemen energi yang efisien juga sangat penting untuk mengoptimalkan biaya kendaraan listrik dalam rantai pasokan, melalui praktik pengisian daya yang tepat dan penggunaan fitur regeneratif untuk mengisi daya baterai secara efisien."}   
                        />
                    </div>
                </section>
          
  
            </div>
        </div>
    </main>
    );
  };
  
  export default Page;
















