# idx-network

Smarter Identities, Smarter Cities

How to Use:


Inspired by:
https://hyperledger.github.io/composer/latest/tutorials/developer-tutorial

1) Create empty business network inside idx-network
yo hyperledger-composer:businessnetwork

2) create directory to store business network configs 
composer archive create -t dir -n .

3) compile business network into business network archive file using PeerAdminCard

composer network install --card PeerAdmin@hlfv1 --archiveFile tutorial-network@0.0.1.bna

4) start business network
composer network start --networkName tutorial-network --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card

5) import networkadmin card
composer card import --file networkadmin.card

6) test business network with ping
composer network ping --card admin@tutorial-network

7) run REST server to expose REST API
composer-rest-server

8) run Angular server (first cd into new directory created for rest server)
yo hyperledger-composer:angular
