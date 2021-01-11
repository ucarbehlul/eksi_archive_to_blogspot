# eksi_archive_to_blogspot
ekşi sözlük arşivini blogspot'a aktarma aracı

# Kullanım

repository'yı indirdikten ve `npm install` yaptıktan sonra.
```
npx babel-node index.js --xml <arşiv_dosyası> --blogId <blog_id>
```
Şeklinde kullanılabilir.

Blogspot'a post edebilmek için bir oauth token'e ihtiyacınız olacak. Bunu da AUTH_TOKEN env variable ile sağlayabilirsiniz. 
Bu auth token'i almak için google cloud console'da bir test uygulaması açıp https://github.com/google/oauth2l gibi bir araçla
terminalde token oluşturabilirsiniz.

# Limitler
Blogspot maalesef günde 100 blog postuna izin veriyor. 
Bir gün entrylerinizin bir kısmını post ettiyseniz ertesi gün `--atla` ayarıyla kaldığınız yerden devam edebilirsiniz.
