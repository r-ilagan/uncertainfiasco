import Image from 'next/image';

function Name() {
  return (
    <>
      <Image
        src="/tape.png"
        alt="Name of the author"
        width={300}
        height={100}
      />
    </>
  );
}

export default Name;
