import { navLinks } from "../utils/constants";
import styles from "./style";
import Image from 'next/image';
import feather from '../public/img/feather.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faQuestion,
  faFileCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
  Stack,
  Text
} from '@chakra-ui/react';

const steps = [
  { title: 'Générer', description: 'Rentrez vos informations' },
  { title: 'Modifier', description: 'Personnalisez le contenu' },
  { title: 'Télécharger', description: 'PDF ou Word' },
]


const Navbar = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  })

  const activeStepText = steps[activeStep].description

  return (
    <nav className={`${styles.paddingX} w-full fixed top-0 py-5 flex items-center justify-center z-20 text-[16px] bg-primary text-white`}>
      {/* General Navbar  */}
      <div className="w-full flex items-center justify-between max-w-7xl">
        <div className="cursor-pointer">
          <Image src={feather} alt="A writer feather" className= "w-[35px] lg:w-[50px] z-50"/>
        </div>
        <ul className="hidden lg:flex list-none">
          {navLinks.map((link) => (
            <li key={link.id} className="px-5 transition-colors hover:text-secondary">
              <a href={link.id}>{link.title}</a>
            </li>
          ))}
        </ul>
        <ul className="flex lg:hidden list-none">
          <li className="px-5">
            <a>
              <FontAwesomeIcon icon={faFileCirclePlus} className='w-[40px]  transition-colors hover:text-tertiary cursor-pointer'/>
            </a>
          </li>
          <li className="px-5">
            <a>
              <FontAwesomeIcon icon={faQuestion} className='w-[22px]  transition-colors hover:text-tertiary cursor-pointer'/>
            </a>
          </li>
          <li className="px-5">
            <a>
              <FontAwesomeIcon icon={faUser} className='w-[28px] transition-colors hover:text-tertiary cursor-pointer'/>
            </a>
          </li>
        </ul>
        <div className="hidden items-center">
          <a className="hover:text-secondary cursor-pointer transition-colors">Se connecter</a>
          <a className="cta3 cursor-pointer ms-4">
            <p>S'enregistrer</p>
          </a>
        </div>
      </div>
      {/* Navbar for Generator */}
      <div className="w-full max-w-7xl hidden">
        <Stepper size='lg' colorScheme='whatsapp' index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription color='gray.200' >{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
        </Stepper>
      </div>
      <div className="hidden">
        <Stack>
          <Stepper size='sm' index={activeStep} gap='0' colorScheme='whatsapp'>
            {steps.map((step, index) => (
              <Step key={index} gap='0'>
                <StepIndicator>
                  <StepStatus complete={<StepIcon />} />
                </StepIndicator>
                <StepSeparator _horizontal={{ ml: '0' }} />
              </Step>
            ))}
          </Stepper>
          <Text>
            Etape {activeStep + 1}: <b>{activeStepText}</b>
          </Text>
        </Stack>
      </div>
    </nav>
  )
};

export default Navbar;
