import ButtonFilter from '../../atoms/ButtonFilter';
import ButtonShare from '../../atoms/ButtonShare';

export default function ClassDetailCenter() {
  return (
    <>
      <div className="flex gap-2">
        <ButtonFilter type="gray">Seni</ButtonFilter>
        <ButtonFilter type="gray">60 menit</ButtonFilter>
      </div>
      <h2 className="text-gray-700 text-2xl font-medium mt-3">
        Kelas Menggambar Manga
      </h2>
      <div className="flex gap-2 text-gray-600 text-base mt-2">
        <p>
          <i className="bi bi-star-fill"></i> 5.0 (10 Ulasan)
        </p>
        <p>
          <i className="bi bi-person-fill"></i> SMP/SMA, 14-18 tahun
        </p>
      </div>
      <p className="text-gray-600 text-sm mt-3">
        Di kelas ini kita akan membahas jenis-jenis gambar manga dan tingkat
        kesulitannya. Kita juga akan bareng-bareng menggambar dari langkah yang
        paling awal sampai sketsa gambarnya jadi. Kelas ini sangat cocok untuk
        kamu yang masih pemula.
      </p>
      <div className="flex gap-3 items-center">
        <p className="text-gray-600 text-3xl font-medium">Rp59.000,00</p>
        <p className="text-gray-600">per kelas</p>
        <div className="flex gap-2 mt-4">
          <ButtonShare>
            <i className="bi bi-heart-fill"></i>
          </ButtonShare>
          <ButtonShare>
            <i className="bi bi-share-fill"></i>
          </ButtonShare>
          <ButtonShare>
            <i className="bi bi-whatsapp"></i>
          </ButtonShare>
        </div>
      </div>
      <div className="mt-2 mb-3 flex gap-3 items-center">
        <p className="text-primary text-lg">Detail</p>
        <div className="h-px w-full flex bg-primary"></div>
      </div>
      <p className="text-gray-600 text-sm">
        <b>Tujuan pembelajaran:</b> <br />
        Kamu tahu langkah-langkah menggambar manga <br />
        dari awal sampai selesai.
        <br />
        <br />
        <b>Alat dan Bahan yang diperlukan:</b> <br />
        Kertas gambar, pensil & penghapus, drawing pen
        <br />
        <br />
        <b>Informasi tambahan: </b>
        <br />
        Tingkat Kesulitan - Pemula
        <br />
        Sumber belajar tambahan silahkan klik disini
        <br />
      </p>
    </>
  );
}
