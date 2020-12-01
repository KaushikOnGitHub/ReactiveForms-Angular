   export class basic
   {
      file: any;
      reimbursement_account_no: any;
      constructor (

        public id: number,
        public Employee_no: string,
        public Title: string,
        public Addressed_as: string,
        public First_Name: string,
        public Middle_Name: string,
        public Last_Name: string,
        public Initials: string,
        public user_gender: string,
        public dob: string,
        public Employee_Age: number,
        public Official_Phone: string,
        public Personal_Mobile: string,
        public Fax: string,
        public Official_Email: string,
        public Personal_Email: string,
        public Personal_Email_2: string,
        public Personal_Email_3: string,
        public bank_name: string,
        public account_type: string,
        public payment_type: string,
        public account_no: string,
        public branch_details: string,
        public ifsc_code: string,
        public reimbursement_bank_name: string,
        public reimbursement_acc_no: string,
        public birth_place: string,
        public religion: string,
        public caste: string,
        public domicile: string,
        public nationality: string,
        public voter_id: string,
        public pan_no: string,
        public aadhaar_no: string,
        public maritial_status: string,
        public no_of_status: string,
        public marriage_date: string
          ) {}

   }

   export class present

   {
     constructor (

       public id: number,
       public present_address: string,
       public city: string,
       public country: string,
       public state: string,
       public district: string,
       public pin: string,           ){}

   }

   export class permanent

   { constructor
    (public id: number,
     public address_permanent: string,
     public percity: string,
     public percountry: string,
     public perstate: string,
     public perdistrict: string,
     public perpin: string,
     public phone1: number,
     public phone2: number,
     public fax_mobile: string,
     public personal_email: string,
     public sameaddress:string,
     ){}}


     export class skill

     {constructor
     (public id: string,
      public skill_cat: string,
      public skill: string,
      public skill_level: string,
      public is_current: string,){}}



      export class qualification

     {constructor
     (public id: string,
      public qualification: string,
      public institute: string,
      public passing_year: string,
      public score: string,){}}



      export class experience

      {constructor
      (public id: string,
       public from_date: string,
       public to_date: string,
       public organisation: string,
       public experience: string, ){}}
