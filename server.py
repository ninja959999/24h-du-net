from livereload import Server

server = Server()

# Surveille les fichiers HTML, CSS et JS et déclenche un rechargement automatique
server.watch('*.html')
server.watch('*.css')
server.watch('*.js')

# Si vous souhaitez exécuter une tâche (ex: build/script) à chaque modification avant de recharger :
# server.watch('*.js', shell('python build.py'))

# Lance le serveur sur le port 8000
# open_url_delay=1 ouvre le navigateur après 1 seconde
server.serve(root='.', port=8000, open_url_delay=1)