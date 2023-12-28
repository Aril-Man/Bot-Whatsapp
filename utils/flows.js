const flows = {
    "message_greeting" : "*Assalamu'alaikum warahmatullahi wabarakatuh!*\n\nSelamat datang di Bisnis Syariah (Best Corporation). Kamu mau bisnis tapi bingung gimana mulainya?\n\nDengan Best Corporation kamu bisa mulai bisnis dengan modal Rp 2,6 jt aja kamu juga dapat product yang berkualitas loohh... \n\nYuk telusuri lebih lanjut dengan ketik keyword di bawah ini untuk mengetahui seputar Best Corporation :\n\n- *Info*\n- *Produk*\n- *Reseller*",
    "info_message" : "*Apa itu PT BEST (Best Corporation)?*\n\nPT Bandung Eco Sinergi Teknologi (PT BEST) adalah Perusahaan Penjualan Langsung (Direct Selling) yang memasarkan produk-produk berkualitas dan sangat dibutuhkan oleh masyarakat.\n\nPT BEST telah memiliki legalitas yang lengkap dari Kementerian Perdagangan Republik Indonesia sejak Desember 2019 dengan NIB 8120001861974 serta telah terdaftar sebagai anggota Asosiasi Perusahaan Penjualan Langsung Indonesia (AP2LI).\n\nPT BEST berkomitmen untuk menjalankan program pemasaran dengan sistem Syariah sesuai dengan Fatwa DSN MUI Nomor 75/DSN-MUI/VII/2009 Tentang Pedoman Penjualan Langsung Berjenjang Syariah (PLBS).",
    "category_product" : "Tentukan kategori produk yang ingin Anda jelajahi 😁.\n\n- *Kecantikan*\n- *Otomotif*\n- *Suplement*\n- *Parfum*\n- *Best Seller*\n- *File Produk*",
    "katalog_produk" : {
        "category" : [
            {
                "name" : "kecantikan",
                "product" : [
                    {
                        "name" : "Bright Serum",
                        "path" : "./public/img/Skin Care/01 Bright Serum.jpg"
                    },
                    {
                        "name" : "Night Cream",
                        "path" : "./public/img/Skin Care/02 Night Cream.jpg"
                    },
                    {
                        "name" : "Essencee",
                        "path" : "./public/img/Skin Care/04 Essencee.jpg"
                    },
                    {
                        "name" : "Cleansing Aqua Gel",
                        "path" : "./public/img/Skin Care/05 Cleansing Aqua Gel.jpg"
                    }
                ]
            },
            {
                "name" : "otomotif",
                "product" : [
                    {
                        "name" : "Nano Oil",
                        "path" : "./public/img/Otomotif/nano-oil-v3.jpg"
                    },
                    {
                        "name" : "Eco Racing",
                        "path" : "./public/img/produk3.png"
                    }
                ]
            },
            {
                "name" : "suplement",
                "product" : [
                    {
                        "name" : "LVN Collagenia",
                        "path" : "./public/img/Suplement/collageniav2.png"
                    },
                    {
                        "name" : "Bmax",
                        "path" : "./public/img/Suplement/bmax.jpg"
                    },
                    {
                        "name" : "LVN Calci",
                        "path" : "./public/img/Suplement/calciv2.png"
                    },
                    {
                        "name" : "LVN Evitgo",
                        "path" : "./public/img/Suplement/evitgov2.png"
                    },
                    {
                        "name" : "LVN Xlim",
                        "path" : "./public/img/Suplement/xlimv2.png"
                    },
                    {
                        "name" : "Xmen",
                        "path" : "./public/img/Suplement/xmen.jpg"
                    }
                ]
            },
            {
                "name" : "parfum",
                "product" : [
                    {
                        "name" : "Lavanaya Secret (Baccarat)",
                        "path" : "./public/img/Parfum/baccarat.jpg"
                    },
                    {
                        "name" : "Lavanaya Secret (Black Opium)",
                        "path" : "./public/img/Parfum/black-opium.jpg"
                    },
                    {
                        "name" : "Lavanaya Secret (London)",
                        "path" : "./public/img/Parfum/london.jpg"
                    },
                    {
                        "name" : "Lavanaya Secret (VIP Man)",
                        "path" : "./public/img/Parfum/vip-man.jpg"
                    }
                ]
            },
            {
                "name": "bestseller",
                "product" : [
                    {
                        "name": "Boost Farm",
                        "path" : "./public/img/Farm/boost-farm.jpg"
                    },
                    {
                        "name": "Eco Farming Fotosintesa",
                        "path" : "./public/img/Farm/eco-farming-fotosintesa-2.jpg"
                    },
                    {
                        "name": "Pillow Slow Release",
                        "path" : "./public/img/Farm/ef-slow-release-new.jpg"
                    }
                ]
            }
        ],
    },
    "file_catalog" : "*Untuk melihat detail product lebih lanjut silahkan download file berikut.*",
    "form_register" : 
`Form Reseller PT BEST : 👇👇👇

Nama Lengkap: 
No ktp: 
Tempat Tanggal Lahir : 
Agama:
Email: 
Alamat :
Kota: 
Kode Pos:
No Hp:
No Rek:
Nama bank:
Ahli Waris :
Hubungan :
Nomor KTP ahli waris
No tlp ahli waris :

NB: Nama pemiliki bank harus sesuai dengan yang Punya ID

silahkan transfer pembelian :
    First Order membership min 1 Hak Usaha ( 1 HU): Rp. 2.600.000

ke Rek BCA 👇👇
7361208190
A/N  Azriel Fauzi Hermansyah

Note : 
1 Paket dapat 14 Box ( variant product mix) 
Seharga 3.5 jt ( harga jual @250k ) 
Transfer hanya 2.6 jt

Alamat kirim ke:
Nama : 
No hp:
Rt/rw:
Kel:
Kec:
Kode pos: 

Salam,
*Azriel Fauzi Hermansyah*`,
    "message_register": "*Silahkan isi formulir di atas lalu kirim ke https://wa.me/6289654591193*",
    "order": "*Hubungi nomor di bawah ini untuk order product yang kamu inginkan.*\n\n https://wa.me/6289654591193"
}

module.exports = {
    flows
}