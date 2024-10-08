let fiyat= prompt('aldığınız ürünün fiyatını yazınız:');

let indirim= prompt('indirim yüzdesini yazınız:');

guncelFiyat= fiyat * ((100 - indirim)/100);

// guncelFiyat= 100 * ((fiyat - indirim) / 100);

alert('ödemeniz gereken güncel fiyat:' + guncelFiyat );
