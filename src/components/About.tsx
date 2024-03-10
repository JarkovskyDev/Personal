const About = () => {
  return (
    <div id="about" data-name="about" className='w-full h-screen bg-[#27384C] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#F6AE2D]'>
              O mě
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Ahoj, jsem Dušan Jarkovský, těší mě.</p>
            </div>
            <div>
              <p>Změna je občas nevyhnutelná a po mnoha letech služby u pražské Policie České republiky jsem se rozhodl, že nastal ten pravý čas pro změnu. Vždy jsem měl rád práci s počítači, a nakonec jsem dospěl k rozhodnutí vstoupit do světa web developmentu. A teď hledám svou první práci v tomto odvětví.</p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About