import DynamicImage from "components/DynamicImage";

export default function Collaborators() {
  return (
    <section className={'pb-8'}>
      <div>
        <DynamicImage className={'inline-block m-1 sm:m-2 md:m-4 w-[280px] sm:w-[380px] md:w-[510px]'}
                      alt={'Oxid Bar'}
                      defaultHeight={120}
                      src={'https://resources.mynewsdesk.com/image/upload/w_600/eq9r4gqnecmtj6redmfe'} />
      </div>
      <div>
        <DynamicImage className={'inline-block m-1 sm:m-2 md:m-4 w-[120px] sm:w-[150px] md:w-[200px]'}
                      alt={'HYDE Stockholm'}
                      defaultHeight={120}
                      src={'https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/295847071_110610028409227_8392059503436137529_n.jpg?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7OPcs9ZSBE8AX9VTiS3&_nc_ht=scontent-arn2-1.xx&oh=00_AfDdM5vEpf5UctYIwAUQOYXsw65xQfqTSLpbIHmptq2EvQ&oe=648E2F2A'}/>
        <DynamicImage className={'inline-block m-1 sm:m-2 md:m-4 w-[120px] sm:w-[150px] md:w-[200px]'}
                      alt={'MYST Stockholm'}
                      defaultHeight={120}
                      src={'https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/301908146_490206223114149_915604709735117745_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2-GrTU7BKO8AX-BPBkX&_nc_ht=scontent-arn2-1.xx&oh=00_AfAerpXXxHi2d1RDM_DY_3wB2XpoBxVjide12-ekGzx1kQ&oe=648E0DE0'}/>
      </div>
      <div>
        <DynamicImage className={'inline-block m-1 sm:m-2 md:m-4 w-[120px] sm:w-[150px] md:w-[200px]'}
                      alt={'Student Union of IEGS'}
                      defaultHeight={120}
                      src={'https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/309231971_164275536257406_3786408696548802747_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tbQZWXuuU4EAX-qFT0P&_nc_ht=scontent-arn2-1.xx&oh=00_AfArkqGxhROvQf9SEseRMPXWJTfntedz--PV6qcn0HVoHQ&oe=648F48F1'}/>
        <DynamicImage className={'inline-block m-1 sm:m-2 md:m-4 w-[120px] sm:w-[150px] md:w-[200px]'}
                      alt={'Marina Läroverkets Elevkår'}
                      defaultHeight={120}
                      src={'https://se-ebas-elevkarer.s3.eu-north-1.amazonaws.com/F110185-6/F110185-6.png'}/>
        <DynamicImage className={'inline-block m-1 sm:m-2 md:m-4 w-[120px] sm:w-[150px] md:w-[200px]'}
                      alt={'Marina Läroverkets Elevkår'}
                      defaultHeight={120}
                      src={'https://pbs.twimg.com/profile_images/465855740838572033/Iv1CkDdc_400x400.jpeg'}/>
      </div>
    </section>
  )
}