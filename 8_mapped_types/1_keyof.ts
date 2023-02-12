type ContactDetails = { name: string; email: string; mobile: string };

// type of keys is 'name' | 'email' | 'mobile', in recent TS printed as keyof ContactDetails
let keys: keyof ContactDetails;
