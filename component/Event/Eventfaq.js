import React from 'react'
import {Box, Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon, Text,Heading} from '@chakra-ui/core'

const Faqdata=[
    {
            Question:"Who are eligible to attend this event?",
            Answer:"Everyone will be welcome from any department or any stream. The only thing you have some idea about the basics of HTML,CSS",
    },
     {
            Question:"Who are eligible to attend this event?",
            Answer:"Everyone will be welcome from any department or any stream. The only thing you have some idea about the basics of HTML,CSS",
    },
     {
            Question:"Who are eligible to attend this event?",
            Answer:"Everyone will be welcome from any department or any stream. The only thing you have some idea about the basics of HTML,CSS",
    },
];


const EventFaq=({Question,Answer})=>{
        return(
        <Accordion _hover={{ bg: "#ffffff" }} allowToggle>
        <AccordionItem >
            <AccordionButton>
               <Box flex="1" textAlign="left">
                  {Question}
                </Box>
                <AccordionIcon />
            </AccordionButton>
        <AccordionPanel pb={4}>
                  {Answer}
        </AccordionPanel>
    </AccordionItem>
</Accordion>
        );
}

const Faq=()=>{
return(
    <Box>
      <Heading font-weight="bold" font-size="30px" line-height="1" color="#232020">
        FAQs
      </Heading>
            {Faqdata.map((link)=>(
                <EventFaq Question={link.Question} Answer={link.Answer}/>
            ))}
    </Box>
)
}
export default Faq