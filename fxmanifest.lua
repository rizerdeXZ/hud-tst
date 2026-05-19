fx_version "cerulean"
game "gta5"

ui_page "web-side/build/index.html"

files {
    'web-side/build/assets/*',
    'web-side/build/index.html'
}

client_scripts { "client-side/*.lua" }

server_scripts { "server-side/*.lua" }

shared_scripts { '@ox_lib/init.lua', 'shared-side/*.lua' }
