import ImageWithProps from '../../atoms/ImageWithProps';

export default function TeacherTestimoniCard() {
  return (
    <div className="shadow-md flex gap-4 items-center p-4 rounded-lg transform transition-all duration-100 hover:-translate-y-1">
      <div className="relative w-14 h-14 rounded-full overflow-hidden">
        <ImageWithProps src="https://source.unsplash.com/500x400/?jessica" />
      </div>
      <div>
        <p className="text-gray-700 text font-medium">Paulina</p>
        <p className="text-gray-600">Enak cara ngajarnya informatif</p>
      </div>
    </div>
  );
}
