 How to Access Function and variable from jquery to Angular8
 
 
If you do not have jquery installed, first install it with the following command.
STEP 1 - First things first

npm install --save jquery

STEP 2 - IMPORT

import * as $ from 'jquery';

export class AppComponent implements OnInit 
{
    private fullName="mortenaho"
    ngOnInit(){
         $('button').click(()=>{
             alert('Hello '+this.fullName); 
         });
    }
}
