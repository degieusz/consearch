
f_db = open('db.js', 'r')
f_sercz = open('sercz.js', 'r')
f_options = open('options.js', 'r')

f_html_begin = open('opt_begin.html', 'r')
f_html_end = open('opt_end.html', 'r')

db = f_db.read();
sercz = f_sercz.read();
options = f_options.read()

html_begin = f_html_begin.read()
html_end = f_html_end.read()

f_db.close()
f_sercz.close()
f_options.close()

#all needed data fetched

table = db.split('\n')
site_list = []
for x in table[3:]:
    if x.find('],') != -1:
        break
    site_list.append(x.strip().strip(',').strip('\"'))


#site list parsed
html_parsed = ''
for x in site_list:
    html_parsed += '<label>\n'
    html_parsed += '<input id=\"' + x + '\" type=\"checkbox\" name=\"mailto\" value=\"mailto\">' + x + '</label><br \\>\n'
    
options_html = html_begin + html_parsed + html_end
#creation of options.html string done


f_sercz = open('out/sercz.js', 'w')
f_options = open('out/options.js', 'w')
f_options_html = open('out/options.html', 'w')

f_sercz.write(db + sercz)
f_options.write(db + options)
f_options_html.write(options_html)
#sercz.js options.js and options.html generated

f_sercz.close()
f_options.close()
f_options_html.close()

