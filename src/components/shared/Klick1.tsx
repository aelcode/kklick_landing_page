import { PiPrinterLight } from 'react-icons/pi';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import Postcard from '@/assets/layouts/postcard.webp';
import Window from '@/assets/layouts/window.webp';

export function KlickOne() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          className='h-6 w-6 shrink-0 rounded-full'
          variant='outline'
          size='icon'
        >
          <PiPrinterLight className='h-4 w-4' />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className='mx-auto w-full max-w-sm'>
          <DrawerHeader>
            <DrawerTitle>Photo Print Layout</DrawerTitle>
            <DrawerDescription>Type: Postcard | Window</DrawerDescription>
          </DrawerHeader>
          <div className='p-4 pb-0'>
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2'>
              <img src={Postcard} alt='postcard' height='50%' width='50%' />
              <img src={Window} alt='window' height='50%' width='50%' />
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
