let name, val;
const url_string = document.URL;
const url = new URL(url_string);
let doi;

if (url.searchParams.get('in') != null) {
    doi = url.searchParams.get('in');
}else {
    doi = "JEJE";
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
            html: `Gw tau ko lu lagi marah sama gw!`,
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              Swal.fire({
                title: ' ',
                html: `Lagi bt sama gw!`,
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false,
              }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                  Swal.fire('Gw minta maaf . :)').then((result) => {
                    Swal.fire(
                      'MAAFIN!!,   ',
                      'gw minta maaf atas sikap gw yang egois,kaya anak kecil,maaf gw selalu bikin lu marah,bikin lu badmood gw minta maaf gw gak mau berantem terus kaya gini!',
                      'success'
                    ).then((result) => {
                      Swal.fire(
                        'Please maafin gw. gw sayang sama elu!.',
                        '',
                        'success'
                      ).then((result) => {
                        Swal.fire("I LOVE YOU", '<i class="fas fa-heart text-danger animate__animate animate__heartBeat animate__repeat-3"></i>').then((result) => {
                          Swal.fire({
                            title: 'Jawab yang jujur ya!',
                            text: 'lu  mau maafin gw gak?',
                            showDenyButton: true,
                            confirmButtonText: `Dimaafin!`,
                            denyButtonText: `Enggak!`,
                          }).then((result) => {
                            /* Read more about isConfirmed, isDenied below */
                            if (result.isConfirmed) {
                                Swal.fire({
                                    title: ' ',
                                    html: `Terima kasih by udah mau maafin gw!`,
                                    timer: 2000,
                                    timerProgressBar: true,
                                    showConfirmButton: false,
                              }).then((result) => {
                                Swal.fire('Gw janji', 'gw akan berusaha lagi untuk menjadi yang lebih baik buat lu ', 'success').then((result) => {
                                  Swal.fire("I LOVE YOU", '<i class="fas fa-heart text-danger animate__animate animate__heartBeat animate__repeat-3"></i>').then((result) => {
                                    selesai()
                                  });
                                })
                              })
                            } else if (result.isDenied) {
                              Swal.fire('Oh okedeh gakpp kalo lu gak mau maafin gw').then((result) => {
                                Swal.fire("Marahnya jangan lama-lama",'<i class="fas fa-sad-cry"></i>').then((result) => {
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