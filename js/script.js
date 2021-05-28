let name, val;
const url_string = document.URL;
const url = new URL(url_string);
let doi;

if (url.searchParams.get('in') != null) {
    doi = url.searchParams.get('in');
}else {
    doi = "SRI MULYANI";
}

let footer = document.getElementById("harisaid");
footer.innerHTML = doi;
footer.href = "#";

function time() {
    var d = new Date();
    var n = d.getHours();
    console.log(n);
    if (n >= 5 && n <= 10) {
        return "Pagi";
    }else if (n >= 10 && n <=15) {
        return "Siang";
    }else if (n >= 15 && n <= 18) {
        return "Sore"
    } else if (n >= 18 && n <= 24) {
        return "Malam"
    }
}

function makan(){
    switch (time()){
        case "Pagi":
            return "sarapan"
            break;
        case "Siang":
            return "makan siang"
            break;
        case "Malam":
            return "makan malam"
            break;
        case "Sore":
             return "makan"
             break;
            default:
             break;
  
    }
}

function selesai() {
    const teks = document.getElementById('teks');
    const btn = document.querySelector('.tombol');
    teks.innerHTML = ` ${doi} <i class="fas fa-heart text-danger animate__animate animate__heartBeat animate__repeat-3"></i>`;
    btn.classList.add('d-none');
    teks.classList.remove('d-none');
}

document.querySelector(".tombol").addEventListener('click', function () {
    Swal.fire({
      title: 'Hai byy!',
      html: `Selamat ${time()}, Kamu udah ${makan()}?`,
      timer: 2500,
      timerProgressBar: true,
      showConfirmButton: false,
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire('Kalau belum jangan lupa makan yaa').then((result) => {
          Swal.fire({
            title: ' ',
            html: `Aku tau ko kamu lagi marah sama aku!`,
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              Swal.fire({
                title: ' ',
                html: `Lagi bt sama aku!`,
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false,
              }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                  Swal.fire('Aku minta maaf untuk segala-galanya. Maaf karena membuat kamu menangis. :)').then((result) => {
                    Swal.fire(
                      'sering ninggalin kamu, bikin kamu nunggu terus,Maaf udah membuat kamu kecewa dan sedih',
                      '',
                      'info'
                    ).then((result) => {
                      Swal.fire(
                        'Maafin aku. Aku sayang kamu!.',
                        '',
                        'success'
                      ).then((result) => {
                        Swal.fire("I LOVE YOU", '<i class="fas fa-heart text-danger animate__animate animate__heartBeat animate__repeat-3"></i>').then((result) => {
                          Swal.fire({
                            title: 'Jawab yang jujur ya!',
                            text: 'Kamu mau maafin aku gak?',
                            showDenyButton: true,
                            confirmButtonText: `Dimaafin`,
                            denyButtonText: `Enggak!`,
                          }).then((result) => {
                            /* Read more about isConfirmed, isDenied below */
                            if (result.isConfirmed) {
                                Swal.fire({
                                    title: ' ',
                                    html: `Terima kasih udah mau maafin aku!`,
                                    timer: 2000,
                                    timerProgressBar: true,
                                    showConfirmButton: false,
                              }).then((result) => {
                                Swal.fire('Aku janji', 'Aku akan berusaha lagi untuk menjadi yang lebih baik buat kamu ', 'success').then((result) => {
                                  Swal.fire("I LOVE YOU", '<i class="fas fa-heart text-danger animate__animate animate__heartBeat animate__repeat-3"></i>').then((result) => {
                                    selesai()
                                  });
                                })
                              })
                            } else if (result.isDenied) {
                              Swal.fire('Oh okedeh gakpp kalo kamu gak mau maafin aku').then((result) => {
                                Swal.fire('<i class="fas fa-sad-cry"></i>').then((result) => {
                                  selesai()
                                });
                              })
                            }
                          })
                        })
                      })
                    })
                  })
                }
              })
            }
          })
        })
      }
    })
  });