var articles={}

articles.latestItems=[
    {
        name:"About JavaScript",
        price:799
    },
    {
        name:"About React JS",
        price:999
    }
]

articles.find=(table) => {return `select * from ${table}`}

module.exports=artcles;