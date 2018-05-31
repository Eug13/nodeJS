cd C:\data\db\bin
mongod --directoryperdb --dbpath C:"\data\db\data\db" --logpath "C:\data\db\log\mongo.log" --logappend  --install
net start MongoDB
pause