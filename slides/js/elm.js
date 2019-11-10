(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File === 'function' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




/**/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? elm$core$Result$Ok(value)
		: (value instanceof String)
			? elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2(elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}
var author$project$Main$Play = function (a) {
	return {$: 'Play', a: a};
};
var author$project$Mousikea$Music$C = {$: 'C'};
var author$project$Mousikea$Music$Prim = function (a) {
	return {$: 'Prim', a: a};
};
var author$project$Mousikea$Primitive$Note = F2(
	function (a, b) {
		return {$: 'Note', a: a, b: b};
	});
var author$project$Mousikea$Music$note = F2(
	function (dur, p) {
		return author$project$Mousikea$Music$Prim(
			A2(author$project$Mousikea$Primitive$Note, dur, p));
	});
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Basics$EQ = {$: 'EQ'};
var elm$core$Basics$LT = {$: 'LT'};
var elm$core$List$cons = _List_cons;
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$GT = {$: 'GT'};
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0.a;
	return elm$core$Dict$keys(dict);
};
var author$project$Mousikea$Music$c = F2(
	function (octave, dur) {
		return A2(
			author$project$Mousikea$Music$note,
			dur,
			_Utils_Tuple2(author$project$Mousikea$Music$C, octave));
	});
var author$project$Mousikea$Util$Ratio$Rational = F2(
	function (a, b) {
		return {$: 'Rational', a: a, b: b};
	});
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Basics$modBy = _Basics_modBy;
var author$project$Mousikea$Util$Ratio$gcd = F2(
	function (a, b) {
		gcd:
		while (true) {
			if (!b) {
				return a;
			} else {
				var $temp$a = b,
					$temp$b = A2(elm$core$Basics$modBy, b, a);
				a = $temp$a;
				b = $temp$b;
				continue gcd;
			}
		}
	});
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$negate = function (n) {
	return -n;
};
var author$project$Mousikea$Util$Ratio$normalize = function (_n0) {
	var p = _n0.a;
	var q = _n0.b;
	var k = A2(author$project$Mousikea$Util$Ratio$gcd, p, q) * ((q < 0) ? (-1) : 1);
	return A2(author$project$Mousikea$Util$Ratio$Rational, (p / k) | 0, (q / k) | 0);
};
var author$project$Mousikea$Util$Ratio$over = F2(
	function (x, y) {
		return (y < 0) ? author$project$Mousikea$Util$Ratio$normalize(
			A2(author$project$Mousikea$Util$Ratio$Rational, -x, -y)) : author$project$Mousikea$Util$Ratio$normalize(
			A2(author$project$Mousikea$Util$Ratio$Rational, x, y));
	});
var author$project$Mousikea$Music$en = A2(author$project$Mousikea$Util$Ratio$over, 1, 8);
var author$project$Mousikea$Music$G = {$: 'G'};
var author$project$Mousikea$Music$g = F2(
	function (octave, dur) {
		return A2(
			author$project$Mousikea$Music$note,
			dur,
			_Utils_Tuple2(author$project$Mousikea$Music$G, octave));
	});
var author$project$Mousikea$Music$Seq = F2(
	function (a, b) {
		return {$: 'Seq', a: a, b: b};
	});
var author$project$Mousikea$Primitive$Rest = function (a) {
	return {$: 'Rest', a: a};
};
var author$project$Mousikea$Music$rest = function (dur) {
	return author$project$Mousikea$Music$Prim(
		author$project$Mousikea$Primitive$Rest(dur));
};
var author$project$Mousikea$Util$Ratio$fromInt = function (x) {
	return A2(author$project$Mousikea$Util$Ratio$over, x, 1);
};
var author$project$Mousikea$Music$zero = author$project$Mousikea$Util$Ratio$fromInt(0);
var author$project$Mousikea$Music$empty = author$project$Mousikea$Music$rest(author$project$Mousikea$Music$zero);
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var author$project$Mousikea$Music$line = A2(elm$core$List$foldr, author$project$Mousikea$Music$Seq, author$project$Mousikea$Music$empty);
var author$project$Mousikea$Examples$BlueLambda$x1 = author$project$Mousikea$Music$line(
	_List_fromArray(
		[
			A2(author$project$Mousikea$Music$c, 4, author$project$Mousikea$Music$en),
			A2(author$project$Mousikea$Music$g, 4, author$project$Mousikea$Music$en),
			A2(author$project$Mousikea$Music$c, 5, author$project$Mousikea$Music$en),
			A2(author$project$Mousikea$Music$g, 5, author$project$Mousikea$Music$en)
		]));
var author$project$Mousikea$Music$Modify = F2(
	function (a, b) {
		return {$: 'Modify', a: a, b: b};
	});
var author$project$Mousikea$Music$Transpose = function (a) {
	return {$: 'Transpose', a: a};
};
var author$project$Mousikea$Music$transpose = F2(
	function (i, m) {
		return A2(
			author$project$Mousikea$Music$Modify,
			author$project$Mousikea$Music$Transpose(i),
			m);
	});
var author$project$Mousikea$Examples$BlueLambda$x2 = A2(
	author$project$Mousikea$Music$Seq,
	author$project$Mousikea$Examples$BlueLambda$x1,
	A2(author$project$Mousikea$Music$transpose, 3, author$project$Mousikea$Examples$BlueLambda$x1));
var author$project$Mousikea$Music$flip = function (fun) {
	return F2(
		function (y, x) {
			return A2(fun, x, y);
		});
};
var author$project$Mousikea$Music$fold = F5(
	function (func, onSeq, onPar, func2, m) {
		var rec = A4(author$project$Mousikea$Music$fold, func, onSeq, onPar, func2);
		switch (m.$) {
			case 'Prim':
				var p = m.a;
				return func(p);
			case 'Seq':
				var m1 = m.a;
				var m2 = m.b;
				return A2(
					onSeq,
					rec(m1),
					rec(m2));
			case 'Par':
				var m1 = m.a;
				var m2 = m.b;
				return A2(
					onPar,
					rec(m1),
					rec(m2));
			default:
				var control = m.a;
				var m_ = m.b;
				return A2(
					func2,
					control,
					rec(m_));
		}
	});
var author$project$Mousikea$Music$pcToInt = function (pc) {
	switch (pc.$) {
		case 'Cff':
			return -2;
		case 'Cf':
			return -1;
		case 'C':
			return 0;
		case 'Cs':
			return 1;
		case 'Css':
			return 2;
		case 'Dff':
			return 0;
		case 'Df':
			return 1;
		case 'D':
			return 2;
		case 'Ds':
			return 3;
		case 'Dss':
			return 4;
		case 'Eff':
			return 2;
		case 'Ef':
			return 3;
		case 'E':
			return 4;
		case 'Es':
			return 5;
		case 'Ess':
			return 6;
		case 'Fff':
			return 3;
		case 'Ff':
			return 4;
		case 'F':
			return 5;
		case 'Fs':
			return 6;
		case 'Fss':
			return 7;
		case 'Gff':
			return 5;
		case 'Gf':
			return 6;
		case 'G':
			return 7;
		case 'Gs':
			return 8;
		case 'Gss':
			return 9;
		case 'Aff':
			return 7;
		case 'Af':
			return 8;
		case 'A':
			return 9;
		case 'As':
			return 10;
		case 'Ass':
			return 11;
		case 'Bff':
			return 9;
		case 'Bf':
			return 10;
		case 'B':
			return 11;
		case 'Bs':
			return 12;
		default:
			return 13;
	}
};
var author$project$Mousikea$Music$absPitch = function (_n0) {
	var pc = _n0.a;
	var oct = _n0.b;
	return (12 * (oct + 1)) + author$project$Mousikea$Music$pcToInt(pc);
};
var author$project$Mousikea$Music$Par = F2(
	function (a, b) {
		return {$: 'Par', a: a, b: b};
	});
var author$project$Mousikea$Primitive$map = F2(
	function (func, prim) {
		if (prim.$ === 'Note') {
			var dur = prim.a;
			var x = prim.b;
			return A2(
				author$project$Mousikea$Primitive$Note,
				dur,
				func(x));
		} else {
			var dur = prim.a;
			return author$project$Mousikea$Primitive$Rest(dur);
		}
	});
var author$project$Mousikea$Music$map = F2(
	function (func, m) {
		switch (m.$) {
			case 'Prim':
				var p = m.a;
				return author$project$Mousikea$Music$Prim(
					A2(author$project$Mousikea$Primitive$map, func, p));
			case 'Seq':
				var m1 = m.a;
				var m2 = m.b;
				return A2(
					author$project$Mousikea$Music$Seq,
					A2(author$project$Mousikea$Music$map, func, m1),
					A2(author$project$Mousikea$Music$map, func, m2));
			case 'Par':
				var m1 = m.a;
				var m2 = m.b;
				return A2(
					author$project$Mousikea$Music$Par,
					A2(author$project$Mousikea$Music$map, func, m1),
					A2(author$project$Mousikea$Music$map, func, m2));
			default:
				var control = m.a;
				var m_ = m.b;
				return A2(
					author$project$Mousikea$Music$Modify,
					control,
					A2(author$project$Mousikea$Music$map, func, m_));
		}
	});
var author$project$Mousikea$Music$A = {$: 'A'};
var author$project$Mousikea$Music$As = {$: 'As'};
var author$project$Mousikea$Music$B = {$: 'B'};
var author$project$Mousikea$Music$Cs = {$: 'Cs'};
var author$project$Mousikea$Music$D = {$: 'D'};
var author$project$Mousikea$Music$Ds = {$: 'Ds'};
var author$project$Mousikea$Music$E = {$: 'E'};
var author$project$Mousikea$Music$F = {$: 'F'};
var author$project$Mousikea$Music$Fs = {$: 'Fs'};
var author$project$Mousikea$Music$Gs = {$: 'Gs'};
var elm$core$Basics$sub = _Basics_sub;
var author$project$Mousikea$Music$indexToPitchClass = function (n) {
	indexToPitchClass:
	while (true) {
		switch (n) {
			case 0:
				return author$project$Mousikea$Music$C;
			case 1:
				return author$project$Mousikea$Music$Cs;
			case 2:
				return author$project$Mousikea$Music$D;
			case 3:
				return author$project$Mousikea$Music$Ds;
			case 4:
				return author$project$Mousikea$Music$E;
			case 5:
				return author$project$Mousikea$Music$F;
			case 6:
				return author$project$Mousikea$Music$Fs;
			case 7:
				return author$project$Mousikea$Music$G;
			case 8:
				return author$project$Mousikea$Music$Gs;
			case 9:
				return author$project$Mousikea$Music$A;
			case 10:
				return author$project$Mousikea$Music$As;
			case 11:
				return author$project$Mousikea$Music$B;
			default:
				var other = n;
				if (other > 0) {
					var $temp$n = other - 12;
					n = $temp$n;
					continue indexToPitchClass;
				} else {
					var $temp$n = other + 12;
					n = $temp$n;
					continue indexToPitchClass;
				}
		}
	}
};
var author$project$Mousikea$Music$pitch = function (ap) {
	var _n0 = _Utils_Tuple2(
		(ap / 12) | 0,
		A2(elm$core$Basics$modBy, 12, ap));
	var oct = _n0.a;
	var n = _n0.b;
	return _Utils_Tuple2(
		author$project$Mousikea$Music$indexToPitchClass(n),
		oct - 1);
};
var author$project$Mousikea$Music$invertAt = function (pRef) {
	return author$project$Mousikea$Music$map(
		function (p) {
			return author$project$Mousikea$Music$pitch(
				(2 * author$project$Mousikea$Music$absPitch(pRef)) - author$project$Mousikea$Music$absPitch(p));
		});
};
var elm$core$Basics$always = F2(
	function (a, _n0) {
		return a;
	});
var elm$core$Basics$append = _Utils_append;
var author$project$Mousikea$Music$invert = function (m) {
	var pFun = function (m_) {
		if (m_.$ === 'Note') {
			var p = m_.b;
			return _List_fromArray(
				[p]);
		} else {
			return _List_Nil;
		}
	};
	var pRef = A5(
		author$project$Mousikea$Music$fold,
		pFun,
		elm$core$Basics$append,
		elm$core$Basics$append,
		author$project$Mousikea$Music$flip(elm$core$Basics$always),
		m);
	if (!pRef.b) {
		return m;
	} else {
		var h = pRef.a;
		return A2(author$project$Mousikea$Music$invertAt, h, m);
	}
};
var author$project$Mousikea$Util$Ratio$addsub = F3(
	function (f, _n0, _n1) {
		var a = _n0.a;
		var b = _n0.b;
		var c = _n1.a;
		var d = _n1.b;
		return author$project$Mousikea$Util$Ratio$normalize(
			A2(
				author$project$Mousikea$Util$Ratio$Rational,
				A2(f, a * d, b * c),
				b * d));
	});
var author$project$Mousikea$Util$Ratio$add = author$project$Mousikea$Util$Ratio$addsub(elm$core$Basics$add);
var author$project$Mousikea$Util$Ratio$multiply = F2(
	function (_n0, _n1) {
		var a = _n0.a;
		var b = _n0.b;
		var c = _n1.a;
		var d = _n1.b;
		return author$project$Mousikea$Util$Ratio$normalize(
			A2(author$project$Mousikea$Util$Ratio$Rational, a * c, b * d));
	});
var author$project$Mousikea$Util$Ratio$divide = F2(
	function (r, _n0) {
		var c = _n0.a;
		var d = _n0.b;
		return A2(
			author$project$Mousikea$Util$Ratio$multiply,
			r,
			A2(author$project$Mousikea$Util$Ratio$Rational, d, c));
	});
var author$project$Mousikea$Util$Ratio$div = author$project$Mousikea$Util$Ratio$divide;
var author$project$Mousikea$Util$Ratio$denominator = function (_n0) {
	var b = _n0.b;
	return b;
};
var author$project$Mousikea$Util$Ratio$numerator = function (_n0) {
	var a = _n0.a;
	return a;
};
var author$project$Mousikea$Util$Ratio$rel = F3(
	function (relop, a, b) {
		return A2(
			relop,
			author$project$Mousikea$Util$Ratio$numerator(a) * author$project$Mousikea$Util$Ratio$denominator(b),
			author$project$Mousikea$Util$Ratio$numerator(b) * author$project$Mousikea$Util$Ratio$denominator(a));
	});
var author$project$Mousikea$Util$Ratio$gt = F2(
	function (a, b) {
		return A3(author$project$Mousikea$Util$Ratio$rel, elm$core$Basics$gt, a, b);
	});
var author$project$Mousikea$Util$Ratio$max = F2(
	function (a, b) {
		return A2(author$project$Mousikea$Util$Ratio$gt, a, b) ? a : b;
	});
var author$project$Mousikea$Music$duration = function (m) {
	duration:
	while (true) {
		switch (m.$) {
			case 'Prim':
				if (m.a.$ === 'Note') {
					var _n1 = m.a;
					var dur = _n1.a;
					return dur;
				} else {
					var dur = m.a.a;
					return dur;
				}
			case 'Seq':
				var m1 = m.a;
				var m2 = m.b;
				return A2(
					author$project$Mousikea$Util$Ratio$add,
					author$project$Mousikea$Music$duration(m1),
					author$project$Mousikea$Music$duration(m2));
			case 'Par':
				var m1 = m.a;
				var m2 = m.b;
				return A2(
					author$project$Mousikea$Util$Ratio$max,
					author$project$Mousikea$Music$duration(m1),
					author$project$Mousikea$Music$duration(m2));
			default:
				if (m.a.$ === 'Tempo') {
					var r = m.a.a;
					var m_ = m.b;
					return A2(
						author$project$Mousikea$Util$Ratio$div,
						author$project$Mousikea$Music$duration(m_),
						r);
				} else {
					var m_ = m.b;
					var $temp$m = m_;
					m = $temp$m;
					continue duration;
				}
		}
	}
};
var author$project$Mousikea$Util$Ratio$subtract = author$project$Mousikea$Util$Ratio$addsub(elm$core$Basics$sub);
var author$project$Mousikea$Util$Ratio$sub = author$project$Mousikea$Util$Ratio$subtract;
var author$project$Mousikea$Music$retro = function (m) {
	switch (m.$) {
		case 'Prim':
			var x = m.a;
			return author$project$Mousikea$Music$Prim(x);
		case 'Modify':
			var control = m.a;
			var m_ = m.b;
			return A2(
				author$project$Mousikea$Music$Modify,
				control,
				author$project$Mousikea$Music$retro(m_));
		case 'Seq':
			var m1 = m.a;
			var m2 = m.b;
			return A2(
				author$project$Mousikea$Music$Seq,
				author$project$Mousikea$Music$retro(m2),
				author$project$Mousikea$Music$retro(m1));
		default:
			var m1 = m.a;
			var m2 = m.b;
			var d2 = author$project$Mousikea$Music$duration(m2);
			var d1 = author$project$Mousikea$Music$duration(m1);
			return A2(author$project$Mousikea$Util$Ratio$gt, d1, d2) ? A2(
				author$project$Mousikea$Music$Par,
				author$project$Mousikea$Music$retro(m1),
				A2(
					author$project$Mousikea$Music$Seq,
					author$project$Mousikea$Music$rest(
						A2(author$project$Mousikea$Util$Ratio$sub, d1, d2)),
					author$project$Mousikea$Music$retro(m2))) : A2(
				author$project$Mousikea$Music$Par,
				A2(
					author$project$Mousikea$Music$Seq,
					author$project$Mousikea$Music$rest(
						A2(author$project$Mousikea$Util$Ratio$sub, d2, d1)),
					author$project$Mousikea$Music$retro(m1)),
				author$project$Mousikea$Music$retro(m2));
	}
};
var author$project$Mousikea$Examples$BlueLambda$x3 = author$project$Mousikea$Music$line(
	_List_fromArray(
		[
			author$project$Mousikea$Examples$BlueLambda$x2,
			author$project$Mousikea$Examples$BlueLambda$x2,
			author$project$Mousikea$Music$invert(author$project$Mousikea$Examples$BlueLambda$x2),
			author$project$Mousikea$Music$retro(author$project$Mousikea$Examples$BlueLambda$x2)
		]));
var author$project$Mousikea$Music$Tempo = function (a) {
	return {$: 'Tempo', a: a};
};
var author$project$Mousikea$Music$tempo = F2(
	function (r, m) {
		return A2(
			author$project$Mousikea$Music$Modify,
			author$project$Mousikea$Music$Tempo(r),
			m);
	});
var elm$core$Basics$le = _Utils_le;
var author$project$Mousikea$Music$times = F2(
	function (n, m) {
		return (n <= 0) ? author$project$Mousikea$Music$empty : A2(
			author$project$Mousikea$Music$Seq,
			m,
			A2(author$project$Mousikea$Music$times, n - 1, m));
	});
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var author$project$Mousikea$Examples$BlueLambda$x4 = A2(
	author$project$Mousikea$Music$Par,
	A2(author$project$Mousikea$Music$times, 6, author$project$Mousikea$Examples$BlueLambda$x3),
	A2(
		author$project$Mousikea$Music$times,
		4,
		A2(
			author$project$Mousikea$Music$tempo,
			A2(author$project$Mousikea$Util$Ratio$over, 2, 3),
			author$project$Mousikea$Examples$BlueLambda$x3)));
var author$project$Mousikea$Music$RhodesPiano = {$: 'RhodesPiano'};
var author$project$Mousikea$Music$Volume = function (a) {
	return {$: 'Volume', a: a};
};
var author$project$Mousikea$Music$Instrument = function (a) {
	return {$: 'Instrument', a: a};
};
var author$project$Mousikea$Music$instrument = F2(
	function (i, m) {
		return A2(
			author$project$Mousikea$Music$Modify,
			author$project$Mousikea$Music$Instrument(i),
			m);
	});
var author$project$Mousikea$Examples$BlueLambda$blueLambda = A2(
	author$project$Mousikea$Music$map,
	function (p) {
		return _Utils_Tuple2(
			p,
			_List_fromArray(
				[
					author$project$Mousikea$Music$Volume(60)
				]));
	},
	A2(author$project$Mousikea$Music$instrument, author$project$Mousikea$Music$RhodesPiano, author$project$Mousikea$Examples$BlueLambda$x4));
var elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var author$project$Mousikea$Examples$BlueLambda$toMusic1 = A2(
	elm$core$Basics$composeR,
	author$project$Mousikea$Music$instrument(author$project$Mousikea$Music$RhodesPiano),
	author$project$Mousikea$Music$map(
		function (p) {
			return _Utils_Tuple2(
				p,
				_List_fromArray(
					[
						author$project$Mousikea$Music$Volume(60)
					]));
		}));
var author$project$Mousikea$Examples$BlueLambda$x0 = A2(author$project$Mousikea$Music$c, 4, author$project$Mousikea$Music$en);
var author$project$Mousikea$Examples$BlueLambda$sample0 = author$project$Mousikea$Examples$BlueLambda$toMusic1(author$project$Mousikea$Examples$BlueLambda$x0);
var author$project$Mousikea$Examples$BlueLambda$sample1 = author$project$Mousikea$Examples$BlueLambda$toMusic1(author$project$Mousikea$Examples$BlueLambda$x1);
var author$project$Mousikea$Examples$BlueLambda$sample2 = author$project$Mousikea$Examples$BlueLambda$toMusic1(author$project$Mousikea$Examples$BlueLambda$x2);
var author$project$Mousikea$Examples$BlueLambda$sample3 = author$project$Mousikea$Examples$BlueLambda$toMusic1(author$project$Mousikea$Examples$BlueLambda$x3);
var author$project$Mousikea$Music$scaleDurations = F2(
	function (r, m) {
		switch (m.$) {
			case 'Prim':
				if (m.a.$ === 'Note') {
					var _n1 = m.a;
					var dur = _n1.a;
					var p = _n1.b;
					return A2(
						author$project$Mousikea$Music$note,
						A2(author$project$Mousikea$Util$Ratio$div, dur, r),
						p);
				} else {
					var dur = m.a.a;
					return author$project$Mousikea$Music$rest(
						A2(author$project$Mousikea$Util$Ratio$div, dur, r));
				}
			case 'Seq':
				var m1 = m.a;
				var m2 = m.b;
				return A2(
					author$project$Mousikea$Music$Seq,
					A2(author$project$Mousikea$Music$scaleDurations, r, m1),
					A2(author$project$Mousikea$Music$scaleDurations, r, m2));
			case 'Par':
				var m1 = m.a;
				var m2 = m.b;
				return A2(
					author$project$Mousikea$Music$Par,
					A2(author$project$Mousikea$Music$scaleDurations, r, m1),
					A2(author$project$Mousikea$Music$scaleDurations, r, m2));
			default:
				var control = m.a;
				var m_ = m.b;
				return A2(
					author$project$Mousikea$Music$Modify,
					control,
					A2(author$project$Mousikea$Music$scaleDurations, r, m_));
		}
	});
var author$project$Mousikea$Music$trans = F2(
	function (i, p) {
		return author$project$Mousikea$Music$pitch(
			author$project$Mousikea$Music$absPitch(p) + i);
	});
var author$project$Mousikea$Music$shiftPitches1 = function (k) {
	return author$project$Mousikea$Music$map(
		function (_n0) {
			var p = _n0.a;
			var xs = _n0.b;
			return _Utils_Tuple2(
				A2(author$project$Mousikea$Music$trans, k, p),
				xs);
		});
};
var author$project$Mousikea$Midi$MEvent$applyControls = function (m) {
	switch (m.$) {
		case 'Modify':
			switch (m.a.$) {
				case 'Tempo':
					var r = m.a.a;
					var m_ = m.b;
					return A2(
						author$project$Mousikea$Music$scaleDurations,
						r,
						author$project$Mousikea$Midi$MEvent$applyControls(m_));
				case 'Transpose':
					var k = m.a.a;
					var m_ = m.b;
					return A2(
						author$project$Mousikea$Music$shiftPitches1,
						k,
						author$project$Mousikea$Midi$MEvent$applyControls(m_));
				default:
					var x = m.a;
					var m_ = m.b;
					return A2(
						author$project$Mousikea$Music$Modify,
						x,
						author$project$Mousikea$Midi$MEvent$applyControls(m_));
			}
		case 'Seq':
			var m1 = m.a;
			var m2 = m.b;
			return A2(
				author$project$Mousikea$Music$Seq,
				author$project$Mousikea$Midi$MEvent$applyControls(m1),
				author$project$Mousikea$Midi$MEvent$applyControls(m2));
		case 'Par':
			var m1 = m.a;
			var m2 = m.b;
			return A2(
				author$project$Mousikea$Music$Par,
				author$project$Mousikea$Midi$MEvent$applyControls(m1),
				author$project$Mousikea$Midi$MEvent$applyControls(m2));
		default:
			var x = m;
			return x;
	}
};
var author$project$Mousikea$Util$Ratio$lt = F2(
	function (a, b) {
		return A3(author$project$Mousikea$Util$Ratio$rel, elm$core$Basics$lt, a, b);
	});
var author$project$Mousikea$Midi$MEvent$merge = F2(
	function (es1, es2) {
		var _n0 = _Utils_Tuple2(es1, es2);
		if (!_n0.a.b) {
			var es2_ = _n0.b;
			return es2_;
		} else {
			if (!_n0.b.b) {
				var es1_ = _n0.a;
				return es1_;
			} else {
				var _n1 = _n0.a;
				var h1 = _n1.a;
				var t1 = _n1.b;
				var _n2 = _n0.b;
				var h2 = _n2.a;
				var t2 = _n2.b;
				return A2(author$project$Mousikea$Util$Ratio$lt, h1.eTime, h2.eTime) ? A2(
					elm$core$List$cons,
					h1,
					A2(author$project$Mousikea$Midi$MEvent$merge, t1, es2)) : A2(
					elm$core$List$cons,
					h2,
					A2(author$project$Mousikea$Midi$MEvent$merge, es1, t2));
			}
		}
	});
var author$project$Mousikea$Util$Ratio$mul = author$project$Mousikea$Util$Ratio$multiply;
var author$project$Mousikea$Midi$MEvent$noteToMEvent = F3(
	function (ctx, dur, _n0) {
		var p = _n0.a;
		var nas = _n0.b;
		var nasFun = F2(
			function (na, ev) {
				switch (na.$) {
					case 'Volume':
						var v = na.a;
						return _Utils_update(
							ev,
							{eVol: v});
					case 'Params':
						var pms = na.a;
						return _Utils_update(
							ev,
							{eParams: pms});
					default:
						return ev;
				}
			});
		var e0 = {
			eDur: A2(author$project$Mousikea$Util$Ratio$mul, dur, ctx.mcDur),
			eInst: ctx.mcInst,
			eParams: _List_Nil,
			ePitch: author$project$Mousikea$Music$absPitch(p),
			eTime: ctx.mcTime,
			eVol: ctx.mcVol
		};
		return A3(elm$core$List$foldr, nasFun, e0, nas);
	});
var author$project$Mousikea$Music$Dyn = function (a) {
	return {$: 'Dyn', a: a};
};
var author$project$Mousikea$Music$Loudness = function (a) {
	return {$: 'Loudness', a: a};
};
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$toFloat = _Basics_toFloat;
var author$project$Mousikea$Util$Ratio$toFloat = function (_n0) {
	var a = _n0.a;
	var b = _n0.b;
	return a / b;
};
var elm$core$Basics$round = _Basics_round;
var author$project$Mousikea$Util$Ratio$round = A2(elm$core$Basics$composeR, author$project$Mousikea$Util$Ratio$toFloat, elm$core$Basics$round);
var elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var elm$core$Maybe$Nothing = {$: 'Nothing'};
var elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(x);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return elm$core$Maybe$Just(
				f(value));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var author$project$Mousikea$Midi$MEvent$musicToMEvents = F2(
	function (ctx, m) {
		musicToMEvents:
		while (true) {
			switch (m.$) {
				case 'Prim':
					if (m.a.$ === 'Note') {
						var _n5 = m.a;
						var dur = _n5.a;
						var p = _n5.b;
						return _Utils_Tuple2(
							_List_fromArray(
								[
									A3(author$project$Mousikea$Midi$MEvent$noteToMEvent, ctx, dur, p)
								]),
							A2(author$project$Mousikea$Util$Ratio$mul, dur, ctx.mcDur));
					} else {
						var dur = m.a.a;
						return _Utils_Tuple2(
							_List_Nil,
							A2(author$project$Mousikea$Util$Ratio$mul, dur, ctx.mcDur));
					}
				case 'Seq':
					var m1 = m.a;
					var m2 = m.b;
					var _n6 = A2(author$project$Mousikea$Midi$MEvent$musicToMEvents, ctx, m1);
					var evs1 = _n6.a;
					var d1 = _n6.b;
					var _n7 = A2(
						author$project$Mousikea$Midi$MEvent$musicToMEvents,
						_Utils_update(
							ctx,
							{
								mcTime: A2(author$project$Mousikea$Util$Ratio$add, ctx.mcTime, d1)
							}),
						m2);
					var evs2 = _n7.a;
					var d2 = _n7.b;
					return _Utils_Tuple2(
						_Utils_ap(evs1, evs2),
						A2(author$project$Mousikea$Util$Ratio$add, d1, d2));
				case 'Par':
					var m1 = m.a;
					var m2 = m.b;
					var _n8 = A2(author$project$Mousikea$Midi$MEvent$musicToMEvents, ctx, m2);
					var evs2 = _n8.a;
					var d2 = _n8.b;
					var _n9 = A2(author$project$Mousikea$Midi$MEvent$musicToMEvents, ctx, m1);
					var evs1 = _n9.a;
					var d1 = _n9.b;
					return _Utils_Tuple2(
						A2(author$project$Mousikea$Midi$MEvent$merge, evs1, evs2),
						A2(author$project$Mousikea$Util$Ratio$max, d1, d2));
				default:
					switch (m.a.$) {
						case 'Instrument':
							var i = m.a.a;
							var m_ = m.b;
							var $temp$ctx = _Utils_update(
								ctx,
								{mcInst: i}),
								$temp$m = m_;
							ctx = $temp$ctx;
							m = $temp$m;
							continue musicToMEvents;
						case 'Phrase':
							var pas = m.a.a;
							var m_ = m.b;
							return A3(author$project$Mousikea$Midi$MEvent$phraseToMEvents, ctx, pas, m_);
						case 'KeySig':
							var _n10 = m.a;
							var m_ = m.b;
							var $temp$ctx = ctx,
								$temp$m = m_;
							ctx = $temp$ctx;
							m = $temp$m;
							continue musicToMEvents;
						case 'Custom':
							var m_ = m.b;
							var $temp$ctx = ctx,
								$temp$m = m_;
							ctx = $temp$ctx;
							m = $temp$m;
							continue musicToMEvents;
						default:
							var m_ = m.b;
							var $temp$ctx = ctx,
								$temp$m = author$project$Mousikea$Midi$MEvent$applyControls(m_);
							ctx = $temp$ctx;
							m = $temp$m;
							continue musicToMEvents;
					}
			}
		}
	});
var author$project$Mousikea$Midi$MEvent$phraseToMEvents = F3(
	function (ctx, pas, m) {
		phraseToMEvents:
		while (true) {
			if (!pas.b) {
				return A2(author$project$Mousikea$Midi$MEvent$musicToMEvents, ctx, m);
			} else {
				var h = pas.a;
				var t = pas.b;
				var loud = function (x) {
					return A3(
						author$project$Mousikea$Midi$MEvent$phraseToMEvents,
						ctx,
						A2(
							elm$core$List$cons,
							author$project$Mousikea$Music$Dyn(
								author$project$Mousikea$Music$Loudness(
									author$project$Mousikea$Util$Ratio$fromInt(x))),
							t),
						m);
				};
				var _n1 = A3(author$project$Mousikea$Midi$MEvent$phraseToMEvents, ctx, t, m);
				var pf = _n1.a;
				var dur = _n1.b;
				var inflate = function (x) {
					var t0 = A2(
						elm$core$Maybe$withDefault,
						author$project$Mousikea$Music$zero,
						A2(
							elm$core$Maybe$map,
							function ($) {
								return $.eTime;
							},
							elm$core$List$head(pf)));
					var r = A2(author$project$Mousikea$Util$Ratio$div, x, dur);
					var upd = function (ev) {
						return _Utils_update(
							ev,
							{
								eVol: author$project$Mousikea$Util$Ratio$round(
									A2(
										author$project$Mousikea$Util$Ratio$mul,
										A2(
											author$project$Mousikea$Util$Ratio$add,
											author$project$Mousikea$Util$Ratio$fromInt(1),
											A2(
												author$project$Mousikea$Util$Ratio$mul,
												A2(author$project$Mousikea$Util$Ratio$sub, ev.eTime, t0),
												r)),
										author$project$Mousikea$Util$Ratio$fromInt(ev.eVol)))
							});
					};
					return _Utils_Tuple2(
						A2(elm$core$List$map, upd, pf),
						dur);
				};
				var stretch = function (x) {
					var t0 = A2(
						elm$core$Maybe$withDefault,
						author$project$Mousikea$Music$zero,
						A2(
							elm$core$Maybe$map,
							function ($) {
								return $.eTime;
							},
							elm$core$List$head(pf)));
					var r = A2(author$project$Mousikea$Util$Ratio$div, x, dur);
					var upd = function (ev) {
						var dt = A2(author$project$Mousikea$Util$Ratio$sub, ev.eTime, t0);
						var t_ = A2(
							author$project$Mousikea$Util$Ratio$add,
							A2(
								author$project$Mousikea$Util$Ratio$mul,
								A2(
									author$project$Mousikea$Util$Ratio$add,
									author$project$Mousikea$Util$Ratio$fromInt(1),
									A2(author$project$Mousikea$Util$Ratio$mul, dt, r)),
								dt),
							t0);
						var d_ = A2(
							author$project$Mousikea$Util$Ratio$mul,
							A2(
								author$project$Mousikea$Util$Ratio$add,
								author$project$Mousikea$Util$Ratio$fromInt(1),
								A2(
									author$project$Mousikea$Util$Ratio$mul,
									A2(
										author$project$Mousikea$Util$Ratio$add,
										A2(
											author$project$Mousikea$Util$Ratio$mul,
											author$project$Mousikea$Util$Ratio$fromInt(2),
											dt),
										ev.eDur),
									r)),
							ev.eDur);
						return _Utils_update(
							ev,
							{eDur: d_, eTime: t_});
					};
					return _Utils_Tuple2(
						A2(elm$core$List$map, upd, pf),
						A2(
							author$project$Mousikea$Util$Ratio$mul,
							A2(
								author$project$Mousikea$Util$Ratio$add,
								author$project$Mousikea$Util$Ratio$fromInt(1),
								x),
							dur));
				};
				switch (h.$) {
					case 'Dyn':
						switch (h.a.$) {
							case 'Accent':
								var x = h.a.a;
								return _Utils_Tuple2(
									A2(
										elm$core$List$map,
										function (e) {
											return _Utils_update(
												e,
												{
													eVol: author$project$Mousikea$Util$Ratio$round(
														A2(
															author$project$Mousikea$Util$Ratio$mul,
															x,
															author$project$Mousikea$Util$Ratio$fromInt(e.eVol)))
												});
										},
										pf),
									dur);
							case 'StdLoudness':
								var l = h.a.a;
								switch (l.$) {
									case 'PPP':
										return loud(40);
									case 'PP':
										return loud(50);
									case 'P':
										return loud(60);
									case 'MP':
										return loud(70);
									case 'SF':
										return loud(80);
									case 'MF':
										return loud(90);
									case 'NF':
										return loud(100);
									case 'FF':
										return loud(110);
									default:
										return loud(120);
								}
							case 'Loudness':
								var x = h.a.a;
								var $temp$ctx = _Utils_update(
									ctx,
									{
										mcVol: author$project$Mousikea$Util$Ratio$round(x)
									}),
									$temp$pas = t,
									$temp$m = m;
								ctx = $temp$ctx;
								pas = $temp$pas;
								m = $temp$m;
								continue phraseToMEvents;
							case 'Crescendo':
								var x = h.a.a;
								return inflate(x);
							default:
								var x = h.a.a;
								return inflate(
									A2(
										author$project$Mousikea$Util$Ratio$mul,
										author$project$Mousikea$Util$Ratio$fromInt(-1),
										x));
						}
					case 'Tmp':
						if (h.a.$ === 'Ritardando') {
							var x = h.a.a;
							return stretch(x);
						} else {
							var x = h.a.a;
							return stretch(
								A2(
									author$project$Mousikea$Util$Ratio$mul,
									author$project$Mousikea$Util$Ratio$fromInt(-1),
									x));
						}
					case 'Art':
						switch (h.a.$) {
							case 'Staccato':
								var x = h.a.a;
								return _Utils_Tuple2(
									A2(
										elm$core$List$map,
										function (e) {
											return _Utils_update(
												e,
												{
													eDur: A2(author$project$Mousikea$Util$Ratio$mul, x, e.eDur)
												});
										},
										pf),
									dur);
							case 'Legato':
								var x = h.a.a;
								return _Utils_Tuple2(
									A2(
										elm$core$List$map,
										function (e) {
											return _Utils_update(
												e,
												{
													eDur: A2(author$project$Mousikea$Util$Ratio$mul, x, e.eDur)
												});
										},
										pf),
									dur);
							case 'Slurred':
								var x = h.a.a;
								var lastStartTime = A3(
									elm$core$List$foldr,
									F2(
										function (e, acc) {
											return A2(author$project$Mousikea$Util$Ratio$max, e.eTime, acc);
										}),
									author$project$Mousikea$Music$zero,
									pf);
								var setDur = function (e) {
									return A2(author$project$Mousikea$Util$Ratio$lt, e.eTime, lastStartTime) ? _Utils_update(
										e,
										{
											eDur: A2(author$project$Mousikea$Util$Ratio$mul, x, e.eDur)
										}) : e;
								};
								return _Utils_Tuple2(
									A2(elm$core$List$map, setDur, pf),
									dur);
							default:
								return _Utils_Tuple2(pf, dur);
						}
					default:
						return _Utils_Tuple2(pf, dur);
				}
			}
		}
	});
var author$project$Mousikea$Music$AcousticGrandPiano = {$: 'AcousticGrandPiano'};
var author$project$Mousikea$Music$qn = A2(author$project$Mousikea$Util$Ratio$over, 1, 4);
var author$project$Mousikea$Util$Ratio$divideIntBy = F2(
	function (i, r) {
		return author$project$Mousikea$Util$Ratio$normalize(
			A2(
				author$project$Mousikea$Util$Ratio$divide,
				author$project$Mousikea$Util$Ratio$fromInt(i),
				r));
	});
var author$project$Mousikea$Util$Ratio$divIntBy = author$project$Mousikea$Util$Ratio$divideIntBy;
var author$project$Mousikea$Util$Ratio$multiplyByInt = F2(
	function (_n0, i) {
		var a = _n0.a;
		var b = _n0.b;
		return author$project$Mousikea$Util$Ratio$normalize(
			A2(author$project$Mousikea$Util$Ratio$Rational, a * i, b));
	});
var author$project$Mousikea$Util$Ratio$mulByInt = author$project$Mousikea$Util$Ratio$multiplyByInt;
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var author$project$Mousikea$Midi$MEvent$perform1Dur = function () {
	var metro = F2(
		function (setting, dur) {
			return A2(
				author$project$Mousikea$Util$Ratio$divIntBy,
				60,
				A2(author$project$Mousikea$Util$Ratio$mulByInt, dur, setting));
		});
	var defCon = {
		mcDur: A2(metro, 120, author$project$Mousikea$Music$qn),
		mcInst: author$project$Mousikea$Music$AcousticGrandPiano,
		mcTime: author$project$Mousikea$Util$Ratio$fromInt(0),
		mcVol: 127
	};
	return A2(
		elm$core$Basics$composeL,
		author$project$Mousikea$Midi$MEvent$musicToMEvents(defCon),
		author$project$Mousikea$Midi$MEvent$applyControls);
}();
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var author$project$Mousikea$Midi$MEvent$perform1 = A2(elm$core$Basics$composeL, elm$core$Tuple$first, author$project$Mousikea$Midi$MEvent$perform1Dur);
var elm$core$Basics$identity = function (x) {
	return x;
};
var author$project$Mousikea$Music$fromNote1 = elm$core$Basics$identity;
var author$project$Mousikea$Midi$MEvent$performNote1 = A2(elm$core$Basics$composeL, author$project$Mousikea$Midi$MEvent$perform1, author$project$Mousikea$Music$fromNote1);
var elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var elm$core$Dict$Black = {$: 'Black'};
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$Red = {$: 'Red'};
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1.$) {
				case 'LT':
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Basics$False = {$: 'False'};
var elm$core$Basics$True = {$: 'True'};
var elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 'Nothing') {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var author$project$Main$init = _Utils_Tuple2(
	{
		random: elm$core$Dict$empty,
		_static: A3(
			elm$core$Dict$insert,
			'4',
			author$project$Mousikea$Midi$MEvent$performNote1(author$project$Mousikea$Examples$BlueLambda$blueLambda),
			A3(
				elm$core$Dict$insert,
				'3',
				author$project$Mousikea$Midi$MEvent$performNote1(author$project$Mousikea$Examples$BlueLambda$sample3),
				A3(
					elm$core$Dict$insert,
					'2',
					author$project$Mousikea$Midi$MEvent$performNote1(author$project$Mousikea$Examples$BlueLambda$sample2),
					A3(
						elm$core$Dict$insert,
						'1',
						author$project$Mousikea$Midi$MEvent$performNote1(author$project$Mousikea$Examples$BlueLambda$sample1),
						A3(
							elm$core$Dict$insert,
							'0',
							author$project$Mousikea$Midi$MEvent$performNote1(author$project$Mousikea$Examples$BlueLambda$sample0),
							elm$core$Dict$empty)))))
	},
	elm$core$Platform$Cmd$none);
var elm$json$Json$Decode$string = _Json_decodeString;
var author$project$Main$playerCmd = _Platform_incomingPort('playerCmd', elm$json$Json$Decode$string);
var author$project$Main$Generated = function (a) {
	return {$: 'Generated', a: a};
};
var elm$json$Json$Encode$int = _Json_wrap;
var elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			elm$core$List$foldl,
			F2(
				function (_n0, obj) {
					var k = _n0.a;
					var v = _n0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var elm$json$Json$Encode$string = _Json_wrap;
var author$project$WebAudioFont$encodeInstrument = function (instrument) {
	if (instrument.$ === 'Regular') {
		var n = instrument.a;
		return elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					elm$json$Json$Encode$string('regular')),
					_Utils_Tuple2(
					'key',
					elm$json$Json$Encode$int(n))
				]));
	} else {
		var n = instrument.a;
		return elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					elm$json$Json$Encode$string('percussion')),
					_Utils_Tuple2(
					'key',
					elm$json$Json$Encode$int(n))
				]));
	}
};
var elm$json$Json$Encode$float = _Json_wrap;
var author$project$WebAudioFont$encodeEvent = function (_n0) {
	var time = _n0.time;
	var instrument = _n0.instrument;
	var pitch = _n0.pitch;
	var duration = _n0.duration;
	var volume = _n0.volume;
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'time',
				elm$json$Json$Encode$float(time)),
				_Utils_Tuple2(
				'instrument',
				author$project$WebAudioFont$encodeInstrument(instrument)),
				_Utils_Tuple2(
				'pitch',
				elm$json$Json$Encode$int(pitch)),
				_Utils_Tuple2(
				'duration',
				elm$json$Json$Encode$float(duration)),
				_Utils_Tuple2(
				'volume',
				elm$json$Json$Encode$float(volume))
			]));
};
var elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var author$project$WebAudioFont$encode = function (_n0) {
	var instruments = _n0.instruments;
	var events = _n0.events;
	var drums = _n0.drums;
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'instruments',
				A2(elm$json$Json$Encode$list, elm$json$Json$Encode$int, instruments)),
				_Utils_Tuple2(
				'events',
				A2(elm$json$Json$Encode$list, author$project$WebAudioFont$encodeEvent, events)),
				_Utils_Tuple2(
				'drums',
				A2(elm$json$Json$Encode$list, elm$json$Json$Encode$int, drums))
			]));
};
var author$project$WebAudioFont$Perc = function (a) {
	return {$: 'Perc', a: a};
};
var author$project$WebAudioFont$Regular = function (a) {
	return {$: 'Regular', a: a};
};
var author$project$WebAudioFont$toPercussionInstrumentNumber = function (pitch) {
	switch (pitch) {
		case 35:
			return 0;
		case 36:
			return 5;
		case 37:
			return 10;
		case 38:
			return 15;
		case 39:
			return 20;
		case 40:
			return 25;
		case 41:
			return 30;
		case 42:
			return 35;
		case 43:
			return 40;
		case 44:
			return 45;
		case 45:
			return 50;
		case 46:
			return 55;
		case 47:
			return 60;
		case 48:
			return 65;
		case 49:
			return 70;
		case 50:
			return 75;
		case 51:
			return 80;
		case 52:
			return 85;
		case 53:
			return 90;
		case 54:
			return 95;
		case 55:
			return 100;
		case 56:
			return 105;
		case 57:
			return 110;
		case 58:
			return 115;
		case 59:
			return 120;
		case 60:
			return 125;
		case 61:
			return 130;
		case 62:
			return 135;
		case 63:
			return 140;
		case 64:
			return 145;
		case 65:
			return 150;
		case 66:
			return 155;
		case 67:
			return 160;
		case 68:
			return 165;
		case 69:
			return 170;
		case 70:
			return 175;
		case 71:
			return 180;
		case 72:
			return 185;
		case 73:
			return 190;
		case 74:
			return 195;
		case 75:
			return 200;
		case 76:
			return 205;
		case 77:
			return 210;
		case 78:
			return 215;
		case 79:
			return 220;
		case 80:
			return 225;
		case 81:
			return 230;
		default:
			return 0;
	}
};
var author$project$WebAudioFont$toInstrumentNumber = F2(
	function (instrument, pitch) {
		switch (instrument.$) {
			case 'AcousticGrandPiano':
				return 0;
			case 'BrightAcousticPiano':
				return 11;
			case 'ElectricGrandPiano':
				return 22;
			case 'HonkyTonkPiano':
				return 32;
			case 'RhodesPiano':
				return 45;
			case 'ChorusedPiano':
				return 58;
			case 'Harpsichord':
				return 70;
			case 'Clavinet':
				return 81;
			case 'Celesta':
				return 89;
			case 'Glockenspiel':
				return 99;
			case 'MusicBox':
				return 107;
			case 'Vibraphone':
				return 116;
			case 'Marimba':
				return 124;
			case 'Xylophone':
				return 133;
			case 'TubularBells':
				return 141;
			case 'Dulcimer':
				return 152;
			case 'HammondOrgan':
				return 160;
			case 'PercussiveOrgan':
				return 170;
			case 'RockOrgan':
				return 180;
			case 'ChurchOrgan':
				return 190;
			case 'ReedOrgan':
				return 200;
			case 'Accordion':
				return 211;
			case 'Harmonica':
				return 223;
			case 'TangoAccordion':
				return 231;
			case 'AcousticGuitarNylon':
				return 244;
			case 'AcousticGuitarSteel':
				return 256;
			case 'ElectricGuitarJazz':
				return 274;
			case 'ElectricGuitarClean':
				return 286;
			case 'ElectricGuitarMuted':
				return 299;
			case 'OverdrivenGuitar':
				return 315;
			case 'DistortionGuitar':
				return 333;
			case 'GuitarHarmonics':
				return 354;
			case 'AcousticBass':
				return 366;
			case 'ElectricBassFingered':
				return 375;
			case 'ElectricBassPicked':
				return 384;
			case 'FretlessBass':
				return 393;
			case 'SlapBass1':
				return 401;
			case 'SlapBass2':
				return 409;
			case 'SynthBass1':
				return 418;
			case 'SynthBass2':
				return 434;
			case 'Violin':
				return 447;
			case 'Viola':
				return 458;
			case 'Cello':
				return 466;
			case 'Contrabass':
				return 475;
			case 'TremoloStrings':
				return 483;
			case 'PizzicatoStrings':
				return 492;
			case 'OrchestralHarp':
				return 500;
			case 'Timpani':
				return 508;
			case 'StringEnsemble1':
				return 517;
			case 'StringEnsemble2':
				return 544;
			case 'SynthStrings1':
				return 553;
			case 'SynthStrings2':
				return 567;
			case 'ChoirAahs':
				return 576;
			case 'VoiceOohs':
				return 588;
			case 'SynthVoice':
				return 600;
			case 'OrchestraHit':
				return 608;
			case 'Trumpet':
				return 617;
			case 'Trombone':
				return 624;
			case 'Tuba':
				return 632;
			case 'MutedTrumpet':
				return 640;
			case 'FrenchHorn':
				return 648;
			case 'BrassSection':
				return 659;
			case 'SynthBrass1':
				return 671;
			case 'SynthBrass2':
				return 683;
			case 'SopranoSax':
				return 695;
			case 'AltoSax':
				return 703;
			case 'TenorSax':
				return 712;
			case 'BaritoneSax':
				return 721;
			case 'Oboe':
				return 729;
			case 'Bassoon':
				return 737;
			case 'EnglishHorn':
				return 745;
			case 'Clarinet':
				return 754;
			case 'Piccolo':
				return 762;
			case 'Flute':
				return 771;
			case 'Recorder':
				return 781;
			case 'PanFlute':
				return 789;
			case 'BlownBottle':
				return 800;
			case 'Shakuhachi':
				return 811;
			case 'Whistle':
				return 821;
			case 'Ocarina':
				return 829;
			case 'Lead1Square':
				return 837;
			case 'Lead2Sawtooth':
				return 846;
			case 'Lead3Calliope':
				return 856;
			case 'Lead4Chiff':
				return 868;
			case 'Lead5Charang':
				return 878;
			case 'Lead6Voice':
				return 892;
			case 'Lead7Fifths':
				return 903;
			case 'Lead8BassLead':
				return 913;
			case 'Pad1NewAge':
				return 923;
			case 'Pad2Warm':
				return 944;
			case 'Pad3Polysynth':
				return 954;
			case 'Pad4Choir':
				return 965;
			case 'Pad5Bowed':
				return 976;
			case 'Pad6Metallic':
				return 986;
			case 'Pad7Halo':
				return 997;
			case 'Pad8Sweep':
				return 1008;
			case 'FX1Train':
				return 1017;
			case 'FX2Soundtrack':
				return 1029;
			case 'FX3Crystal':
				return 1039;
			case 'FX4Atmosphere':
				return 1053;
			case 'FX5Brightness':
				return 1069;
			case 'FX6Goblins':
				return 1084;
			case 'FX7Echoes':
				return 1095;
			case 'FX8SciFi':
				return 1108;
			case 'Sitar':
				return 1120;
			case 'Banjo':
				return 1129;
			case 'Shamisen':
				return 1137;
			case 'Koto':
				return 1147;
			case 'Kalimba':
				return 1158;
			case 'Bagpipe':
				return 1166;
			case 'Fiddle':
				return 1174;
			case 'Shanai':
				return 1185;
			case 'TinkleBell':
				return 1192;
			case 'Agogo':
				return 1200;
			case 'SteelDrums':
				return 1209;
			case 'Woodblock':
				return 1217;
			case 'TaikoDrum':
				return 1228;
			case 'MelodicDrum':
				return 1241;
			case 'SynthDrum':
				return 1252;
			case 'ReverseCymbal':
				return 1262;
			case 'GuitarFretNoise':
				return 1273;
			case 'BreathNoise':
				return 1283;
			case 'Seashore':
				return 1293;
			case 'BirdTweet':
				return 1311;
			case 'TelephoneRing':
				return 1324;
			case 'Helicopter':
				return 1339;
			case 'Applause':
				return 1365;
			case 'Gunshot':
				return 1382;
			case 'Percussion':
				return author$project$WebAudioFont$toPercussionInstrumentNumber(pitch);
			default:
				return 0;
		}
	});
var author$project$WebAudioFont$fromMEvent = function (_n0) {
	var eTime = _n0.eTime;
	var eInst = _n0.eInst;
	var ePitch = _n0.ePitch;
	var eDur = _n0.eDur;
	var eVol = _n0.eVol;
	return {
		duration: author$project$Mousikea$Util$Ratio$toFloat(eDur),
		instrument: function () {
			if (eInst.$ === 'Percussion') {
				return author$project$WebAudioFont$Perc(
					A2(author$project$WebAudioFont$toInstrumentNumber, eInst, ePitch) + 0);
			} else {
				return author$project$WebAudioFont$Regular(
					A2(author$project$WebAudioFont$toInstrumentNumber, eInst, ePitch));
			}
		}(),
		pitch: ePitch,
		time: author$project$Mousikea$Util$Ratio$toFloat(eTime),
		volume: eVol / 127
	};
};
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var elm$core$List$concat = function (lists) {
	return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
};
var elm$core$List$concatMap = F2(
	function (f, list) {
		return elm$core$List$concat(
			A2(elm$core$List$map, f, list));
	});
var elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var elm$core$Set$empty = elm$core$Set$Set_elm_builtin(elm$core$Dict$empty);
var elm$core$Set$insert = F2(
	function (key, _n0) {
		var dict = _n0.a;
		return elm$core$Set$Set_elm_builtin(
			A3(elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var elm$core$Dict$member = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$get, key, dict);
		if (_n0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var elm$core$Set$member = F2(
	function (key, _n0) {
		var dict = _n0.a;
		return A2(elm$core$Dict$member, key, dict);
	});
var elm_community$list_extra$List$Extra$uniqueHelp = F4(
	function (f, existing, remaining, accumulator) {
		uniqueHelp:
		while (true) {
			if (!remaining.b) {
				return elm$core$List$reverse(accumulator);
			} else {
				var first = remaining.a;
				var rest = remaining.b;
				var computedFirst = f(first);
				if (A2(elm$core$Set$member, computedFirst, existing)) {
					var $temp$f = f,
						$temp$existing = existing,
						$temp$remaining = rest,
						$temp$accumulator = accumulator;
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				} else {
					var $temp$f = f,
						$temp$existing = A2(elm$core$Set$insert, computedFirst, existing),
						$temp$remaining = rest,
						$temp$accumulator = A2(elm$core$List$cons, first, accumulator);
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				}
			}
		}
	});
var elm_community$list_extra$List$Extra$unique = function (list) {
	return A4(elm_community$list_extra$List$Extra$uniqueHelp, elm$core$Basics$identity, elm$core$Set$empty, list, _List_Nil);
};
var author$project$WebAudioFont$fromPerformance = function (performance) {
	var regular = function (instr) {
		if (instr.$ === 'Regular') {
			var n = instr.a;
			return _List_fromArray(
				[n]);
		} else {
			return _List_Nil;
		}
	};
	var perc = function (instr) {
		if (instr.$ === 'Perc') {
			var n = instr.a;
			return _List_fromArray(
				[n]);
		} else {
			return _List_Nil;
		}
	};
	var events = A2(elm$core$List$map, author$project$WebAudioFont$fromMEvent, performance);
	return {
		drums: elm_community$list_extra$List$Extra$unique(
			A2(
				elm$core$List$concatMap,
				A2(
					elm$core$Basics$composeR,
					function ($) {
						return $.instrument;
					},
					perc),
				events)),
		events: events,
		instruments: elm_community$list_extra$List$Extra$unique(
			A2(
				elm$core$List$concatMap,
				A2(
					elm$core$Basics$composeR,
					function ($) {
						return $.instrument;
					},
					regular),
				events))
	};
};
var author$project$WebAudioFont$play = _Platform_outgoingPort('play', elm$core$Basics$identity);
var author$project$WebAudioFont$queueWavTable = A2(
	elm$core$Basics$composeR,
	author$project$WebAudioFont$fromPerformance,
	A2(elm$core$Basics$composeR, author$project$WebAudioFont$encode, author$project$WebAudioFont$play));
var elm$json$Json$Encode$null = _Json_encodeNull;
var author$project$WebAudioFont$stop = _Platform_outgoingPort(
	'stop',
	function ($) {
		return elm$json$Json$Encode$null;
	});
var elm$random$Random$Generate = function (a) {
	return {$: 'Generate', a: a};
};
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 'Seed', a: a, b: b};
	});
var elm$random$Random$next = function (_n0) {
	var state0 = _n0.a;
	var incr = _n0.b;
	return A2(elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var elm$random$Random$initialSeed = function (x) {
	var _n0 = elm$random$Random$next(
		A2(elm$random$Random$Seed, 0, 1013904223));
	var state1 = _n0.a;
	var incr = _n0.b;
	var state2 = (state1 + x) >>> 0;
	return elm$random$Random$next(
		A2(elm$random$Random$Seed, state2, incr));
};
var elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var elm$time$Time$customZone = elm$time$Time$Zone;
var elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var elm$time$Time$millisToPosix = elm$time$Time$Posix;
var elm$time$Time$now = _Time_now(elm$time$Time$millisToPosix);
var elm$time$Time$posixToMillis = function (_n0) {
	var millis = _n0.a;
	return millis;
};
var elm$random$Random$init = A2(
	elm$core$Task$andThen,
	function (time) {
		return elm$core$Task$succeed(
			elm$random$Random$initialSeed(
				elm$time$Time$posixToMillis(time)));
	},
	elm$time$Time$now);
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$random$Random$step = F2(
	function (_n0, seed) {
		var generator = _n0.a;
		return generator(seed);
	});
var elm$random$Random$onEffects = F3(
	function (router, commands, seed) {
		if (!commands.b) {
			return elm$core$Task$succeed(seed);
		} else {
			var generator = commands.a.a;
			var rest = commands.b;
			var _n1 = A2(elm$random$Random$step, generator, seed);
			var value = _n1.a;
			var newSeed = _n1.b;
			return A2(
				elm$core$Task$andThen,
				function (_n2) {
					return A3(elm$random$Random$onEffects, router, rest, newSeed);
				},
				A2(elm$core$Platform$sendToApp, router, value));
		}
	});
var elm$random$Random$onSelfMsg = F3(
	function (_n0, _n1, seed) {
		return elm$core$Task$succeed(seed);
	});
var elm$random$Random$Generator = function (a) {
	return {$: 'Generator', a: a};
};
var elm$random$Random$map = F2(
	function (func, _n0) {
		var genA = _n0.a;
		return elm$random$Random$Generator(
			function (seed0) {
				var _n1 = genA(seed0);
				var a = _n1.a;
				var seed1 = _n1.b;
				return _Utils_Tuple2(
					func(a),
					seed1);
			});
	});
var elm$random$Random$cmdMap = F2(
	function (func, _n0) {
		var generator = _n0.a;
		return elm$random$Random$Generate(
			A2(elm$random$Random$map, func, generator));
	});
_Platform_effectManagers['Random'] = _Platform_createManager(elm$random$Random$init, elm$random$Random$onEffects, elm$random$Random$onSelfMsg, elm$random$Random$cmdMap);
var elm$random$Random$command = _Platform_leaf('Random');
var elm$random$Random$generate = F2(
	function (tagger, generator) {
		return elm$random$Random$command(
			elm$random$Random$Generate(
				A2(elm$random$Random$map, tagger, generator)));
	});
var author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'Play':
				var key = msg.a;
				return _Utils_Tuple2(
					model,
					A2(
						elm$core$Maybe$withDefault,
						author$project$WebAudioFont$stop(_Utils_Tuple0),
						A2(
							elm$core$Maybe$map,
							author$project$WebAudioFont$queueWavTable,
							A2(elm$core$Dict$get, key, model._static))));
			case 'Stop':
				return _Utils_Tuple2(
					model,
					author$project$WebAudioFont$stop(_Utils_Tuple0));
			case 'Generate':
				var key = msg.a;
				return _Utils_Tuple2(
					model,
					A2(
						elm$core$Maybe$withDefault,
						elm$core$Platform$Cmd$none,
						A2(
							elm$core$Maybe$map,
							elm$random$Random$generate(author$project$Main$Generated),
							A2(elm$core$Dict$get, key, model.random))));
			default:
				var performance = msg.a;
				return _Utils_Tuple2(
					model,
					author$project$WebAudioFont$queueWavTable(performance));
		}
	});
var elm$core$Platform$worker = _Platform_worker;
var elm$json$Json$Decode$succeed = _Json_succeed;
var author$project$Main$main = elm$core$Platform$worker(
	{
		init: function (_n0) {
			return author$project$Main$init;
		},
		subscriptions: function (model) {
			return author$project$Main$playerCmd(author$project$Main$Play);
		},
		update: author$project$Main$update
	});
_Platform_export({'Main':{'init':author$project$Main$main(
	elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));