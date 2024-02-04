###
Repository Oluşturma

1- GitHub üzerinden UI adımları takip edilerek repo oluşturulur.
2-Proje dosyasında git initialize edilir.
	git init
3-Repository’e pushlanması gerken dosyalar git’e eklenir.
	git add <filename>  ya da git add . (Tüm dosyaları git’e eklemek için)
4-Commit atılır
	git commit -m “Commit message”
5-Remote origin eklenir
	git remote add origin <repo url>
6-Commit pushlanır
	git push -u origin master
###
￼

###
Readme ile oluşturulan repolarda master ve main sorunu çözme

Repository master üzerinde oluşturulur ve pushlanır daha sonra aşağıdaki komutlar yazılır.

git checkout master   
git branch main master -f    
git checkout main  
git push origin main -f 

Local ve master branchleri repoları sil 
git branch -d master
git push origin --delete master


Master için oluşturulan remote u sil
 git remote remove <origin>
 git remote add <origin> <repo_url>


Bu işlemlerden sonra master branchi siliniyor mainden devam  edilebiliyor ama repoda önceki dosyalar silinir dikkat.
###

###
Branch Komutları


1- Yeni branch oluşturma, 2 şekilde yapılabilir
	a-) Branch oluşturulur
		git branch <branch_name>
	b-) Branch oluşturulur ve oluşturulan branche geçiş yapılır. 
		git checkout -b <branch_name>
2-Branchleri listeleme 
	git branch 
3-Branchleri silme
	a-Localde silme
		git branch -d test
	b-Remote’ta silme 
		git push origin --delete <branch_name
4-Branchler arasında geçiş yapmak
	git checkout <branch_name>
5-Oluşturulan branchi remote’a pushlamak
	git push -u origin <branch_name>

*git branch ile branchler listelendiğinde şu an üzerinde olunan branchin yanında * işareti olur ya da yeşil gözükür.
###


###
GitFlow

Repository main branch üzerinden oluşturulur.
Main branchinden develop branchi oluşturulur, geliştirme aşaması develop banchi üzerinden yürütülür.
Projeye eklenecek bugFix ya da feature ‘lar develop branch üzerinden branch çıkarak yapılır ve develop branchine pull request talep ediilir.

Pull Request otomatik olarak main branchi seçili olarak geliyor. Pull request atmadan burda base kısmında develop branchi seçilmeli.
￼


Feature ve bugFix branch isimlendirmesi aşağıdakiler gibi olabilir.
feature/<eklenecek_feature>
bugFix/<düzeltilecek_bug>

feature/<task_no>-<eklenecek_feature>
bugFix/<task_no>-<düzeltilecek_bug>

Proje versiyonlanacağı zaman develop branchi main branchine merge edilir.

###

###
Pull Request 
Pull request,  bir projede değişiklik yapmak  isteyen bir kullanıcının, projenin sahibine değişikliklerini inceletmek üzere yaptığı bir taleptir.

Projede değişiklik yapıldıktan sonra pull request gönderilir, yapılan değişikliğe CR yapılır daha sonra eğer CR uygunsa yapılan değişiklik mergelenir, değilse CR hatalarının düzeltilmesi talep edilir.

Pull Request adımları

1-Yapılacak değişiklik için branch oluşturulur.
2-Değişiklikler commitlenir
3-Değişiklikler pushlanır
4-Repository GitHub üzerinden açılır 
5-Pull requests kısmından Create Pull Requested tıklanır ve form kısmı doldurulur (Repo açıldığında üstte bildirim olarak ta çıkıyor bu kısım zaten eğer pushlu branch varsa)
6-CR yapıldıktan sonra değişikliğiniz repodaki yetkili tarafından merge edilir.
###

###
add new line
###
Alperen Burayı güncelledi.
test satırı
