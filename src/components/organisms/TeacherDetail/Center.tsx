import HeadingWithLine from '../../atoms/HeadingWithLine';

export default function TeacherDetailCenter() {
  return (
    <>
      <h2 className="text-gray-700 text-2xl font-medium text-center lg:text-left">
        Profile Guru Baik
      </h2>
      <div className="flex gap-2 text-gray-600 text-base mt-2 justify-center md:justify-start">
        <p>
          <i className="bi bi-star-fill"></i> 5.0 (10 Ulasan)
        </p>
        <p>
          <i className="bi bi-person-fill"></i> 40 orang
        </p>
      </div>
      <HeadingWithLine title="Deskripsi" />
      <p className="text-gray-600 text-sm">
        Saya adalah seorang mahasiswi Universitas Sebelah Sana yang suka
        menggambar Anime dari Jepang sejak saya kecil. Kecintaan saya terhadap
        budaya Jepang membuat saya terinspirasi untuk menggambar manga.
        <br />
        <br />
        <b>Pengalaman</b>
        <br />
        Pernah menjadi bagian dari Webtoon Creator 2023 dan telah menerbitkan
        beberapa judul di Naver Line Contest seperti “Haru Biru” dan “Musim Semi
        2021”
      </p>
    </>
  );
}
