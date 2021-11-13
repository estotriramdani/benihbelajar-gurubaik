import ButtonShare from '../../atoms/ButtonShare';
import ImageWithProps from '../../atoms/ImageWithProps';

export default function TeacherDetailLeft() {
  return (
    <>
      <div className="p-3 shadow border rounded-xl mb-5">
        <div className="relative w-full lg:w-72 h-72 bg-gray-700 rounded-xl overflow-hidden">
          <ImageWithProps src="https://source.unsplash.com/500x400/?manga" />
        </div>
      </div>
      <div className="mb-4">
        <p className="text-gray-700 text-xl font-medium text-center mb-1">
          Kak Jessica <i className="bi bi-patch-check"></i>
        </p>
        <p className="text-gray-500 text-base text-center">
          Illustrator @marshmelty
        </p>
      </div>
      <div className="flex gap-2 mx-auto justify-center">
        <ButtonShare>
          <i className="bi bi-link-45deg text-xl"></i>
        </ButtonShare>
        <ButtonShare>
          <i className="bi bi-share-fill"></i>
        </ButtonShare>
      </div>
    </>
  );
}
