import { send, shield, star } from "../assets"

export const navigationLinks=[
    {
        id:'home',
        title:"Bosh sahifa"
    },
    {
        id:"feautes",
        title:"Xizmatlar"
    },
    {
        id:"products",
        title:"Mahsulotlar"
    },
    {
        id:"clients",
        title:"Mijozlar"
    }
]



 export const statistics=[
    {
        id:1,
        title:'Foydalanuvchi Faol',
        value:'9300+'
    },
      {
        id:2,
        title:'Kompaniya homiyligida',
        value:'100+'
    },
      {
        id:3,
        title:'Tranzaksiya',
        value:'110M+'
    }
]

export const features=[
    {
        id:1,
        icon:star,
        title:"Mukofotlar",
        content:"Eng yaxshi kredit kartalarni aksiyalar va sovrinlarning ajoyib kombinatsiyasini taklif qiladi."
    },
    {
        id:2,
        icon:shield,
        title:'100% Himoyalangan',
        content:"Ma'lumotlaringiz va tranzaktsiyalaringiz xavfsiz ekanligiga ishonch hosil qilish uchun faol choralarni ko'radi"
    },
    {
        id:3,
        icon:send,
        content:`Balansni o'tkazish kredit kartasi sizga foizlarni to'lashda ko'p pul tejash imkonini beradi.`
    }
]