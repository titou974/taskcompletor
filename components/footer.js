import Image from 'next/image';

const Footer = () => {
  return (
    <div className="w-full max-w-7xl mx-auto h-full py-4">
      <div className='w-full md:w-7/12 mx-auto flex justify-center gap-2'>
        <Image src="/cc.xlarge.png" width={30} height={30}/>
        <Image src="/by.xlarge.png" width={30} height={30}/>
        <Image src="/nc.xlarge.png" width={30} height={30}/>
        <Image src="/nd.xlarge.png" width={30} height={30}/>
      </div>
    </div>
  );
};

export default Footer;
