var fs = require('fs');

exports.data = function () {
    let obj = fs.readdirSync('src');
    return obj;
};

exports.get = function (fileName) {
    const name = `${fileName}.json`
    let obj = JSON.parse(fs.readFileSync(`src/${name}`, 'utf8'));
    return obj;
};

exports.add = function (fileName) {
    const name = `${fileName}.json`
    fs.writeFile(`src/${name}`, JSON.stringify({}), function (err) {
        if (err) throw err;
        return ('xfailed!');
    });
    return ('created!');
}

exports.addData = function (fileName, newObj) {
    const fileObj = JSON.parse(fs.readFileSync(`src/${fileName}.json`));

    const updatedFile = JSON.stringify({ ...fileObj, ...newObj });

    fs.writeFile(`src/${fileName}.json`, updatedFile, function (err) {
        if (err) throw err;
        return ('failed');
    });
    return ('created!');
}

exports.hapus = function (fileName) {
    const name = `${fileName}.json`
    fs.unlink(`src/${name}`, function (err) {
        if (err) throw err;
        return ('failed!');
    });
    return ('deleted!');
}

exports.hapusData = function (fileName, id) {
    const fileObj = JSON.parse(fs.readFileSync(`src/${fileName}.json`));
    delete fileObj[id];
    const updatedFile = JSON.stringify(fileObj);

     fs.writeFile(`src/${fileName}.json`, updatedFile, function (err) {
        if (err) throw err;
        return ('failed!');
    });
    return ('deleted!');
}

exports.rename = function (fileName, newFileName) {
    const name = `${fileName}.json`;
    const newName =  `${newFileName}.json`;
    fs.rename (`src/${name}`, `src/${newName}`,function (err) {
        if (err) throw err;
        return ('failed!');
    });

    return ('renamed!');

}

exports.editData = function (fileName, id, newValue) {
    const fileObj = JSON.parse(fs.readFileSync(`src/${fileName}.json`));

    const updatedFile = JSON.stringify({ ...fileObj, [id]: newValue });

     fs.writeFile(`src/${fileName}.json`, updatedFile, function (err) {
        if (err) throw err;
        return ('failed');
    });
    return ('edited!');
}

