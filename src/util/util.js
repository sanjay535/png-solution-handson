export function generateBackgroundColorOfCard(){
    const colorClasses=['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];
    const idx=Math.floor(Math.random()*colorClasses.length);
    return colorClasses[idx]
}
const calculateAge = (dob) => {
    const dobYear = new Date(dob).getFullYear();
    return new Date().getFullYear() - dobYear;
  };

export const userDataMapper= (data) =>{
    return data.map((user) => {
        return {
          id: user.uid,
          email: user.email,
          name: `${user.first_name} ${user.last_name}`,
          phone: user.phone_number,
          gender: user.gender,
          age: calculateAge(user.date_of_birth),
          img: user.avatar
        };
   })
}

export const sortOnAge=users=>{
    return [...users].sort((a, b)=>a.age-b.age);
}

export const sortOnNames=users=>{
    return [...users].sort((a, b)=>{
        if(a.name>b.name){
            return 1;
        }else if(a.name<b.name){
            return -1;
        }else{
            return 0;
        }
    });
}