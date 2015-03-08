var kinds = {};
function kind(name) {
    return kinds[name] || (kinds[name] = {});
}
exports.kind = kind;
