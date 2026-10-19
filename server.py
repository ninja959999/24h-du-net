from livereload import Server, shell

server = Server()

# Surveille tous les fichiers HTML, CSS et JS dans le dossier courant
server.watch('*.html')
server.watch('*.css')
server.watch('*.js')

# Lance le serveur local sur le port 8000 et ouvre le navigateur
server.serve(root='.', port=8000, open_url_delay=1)