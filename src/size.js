'isArrLike keys';

exports = function (obj)
{
    if (obj == null) return 0;

    return isArrLike(obj) ? obj.length : keys(obj).length;
};