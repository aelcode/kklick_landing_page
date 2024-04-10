import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// interface FAQProps {
//   question: string;
//   answer: string;
//   value: string;
// }

// const FAQList: FAQProps[] = [
//   {
//     question: 'Where are you located?',
//     answer:
//       "We are located at 3rd floor Collective Properties Inc Maylor's {<strong>Plaza Brgy San Roque Antipolo</strong>} (Beside Puregold Circumferential and opposite Shopwise).",
//     value: 'item-1',
//   },
//   {
//     question: 'How to make a reservation?',
//     answer:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.',
//     value: 'item-2',
//   },
//   {
//     question: 'What is the mode of payment?',
//     answer:
//       'For online booking we accept payment through Gcash. For walk-in we accept cash and Gcash.',
//     value: 'item-3',
//   },
//   {
//     question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
//     answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//     value: 'item-4',
//   },
//   {
//     question:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur natus?',
//     answer:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.',
//     value: 'item-5',
//   },
// ];

export const FAQ = () => {
  return (
    <section id='faq' className='container py-24 sm:py-32'>
      <h2 className='text-3xl md:text-4xl font-bold mb-4'>
        Frequently Asked{' '}
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          Questions
        </span>
      </h2>

      {/* <Accordion type='single' collapsible className='w-full AccordionRoot'>
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className='text-left'>
              {question}
            </AccordionTrigger>

            <AccordionContent>
              {answer}{' '}
              <a href='https://maps.app.goo.gl/bNdgtM3nyVk6aH6j9'>Googe Map</a>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion> */}
      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Where are you located?</AccordionTrigger>
          <AccordionContent className='leading-6'>
            We are located at 3rd floor Collective Properties Inc Maylor's Plaza
            Brgy San Roque Antipolo (Beside Puregold Circumferential and
            opposite Shopwise). <br />
            Click this{' '}
            <a
              href='https://maps.app.goo.gl/bNdgtM3nyVk6aH6j9'
              target='_blank'
              rel='noreferrer'
            >
              <strong>Googe Map Link</strong>
            </a>{' '}
            for exact location.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>How to make a reservation?</AccordionTrigger>
          <AccordionContent className='leading-6'>
            When making a reservation, please pay a down payment.
            <br />
            <br /> Downpayment as follows: <br />
            <ol>
              <li>Budget Klick - 50.00</li>
              <li>Klick 1 - 100.00</li>
              <li>Klick 2 - 200.00</li>
              <li>Klick 3 - 300.00</li>
              <li>Klick 4 - 400.00</li>
              <li>Klick Squad - 500.00</li>
              <li>STUDIO RENT: 50%</li>
            </ol>
            Please select the package you want to avail in the{' '}
            <a href='#packages'>
              <strong>package</strong>
            </a>{' '}
            section and click book now button. Payment will be sent thru our
            GCASH 09620869332.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>Mode of Payment?</AccordionTrigger>
          <AccordionContent>
            For online booking we accept payment through Gcash. For walk-in we
            accept cash and Gcash.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger>Do you accept walk-ins?</AccordionTrigger>
          <AccordionContent>
            Yes. We welcome walk-in customers. However, we recommend that you
            contact us beforehand to allow us to advise you on the available
            time slots. This is to ensure that you do not have to wait
            excessively in case the schedule is fully booked. Therefore, we
            strongly recommend that you make an appointment to secure your
            preferred date and time.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-5'>
          <AccordionTrigger>Do you accept pets?</AccordionTrigger>
          <AccordionContent>
            Yes. We are a pet-friendly studio. We are delighted to welcome your
            furry companions and accommodate photo sessions at our studio.
            However, we kindly request that you, as responsible pet owners,
            ensure your pets wear diapers and are on a leash while inside the
            studio. Additionally, please keep a close eye on your pets to
            prevent any inconvenience.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <h3 className='font-medium mt-4'>
        Still have questions?{' '}
        <a
          href='#'
          className='text-primary transition-all border-primary hover:border-b-2'
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
