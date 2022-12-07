/**
 * (^) -> starts with
 * ($) -> ends with
 * (.) -> one instance of anything
 *      . -> one instance of anything
 *          -> %
 *          -> b
 *          -> ac (only a)
 * (*) -> 0 or more instances on the left of it
 *      b* -> 0 or more instances of b
 *          -> bb
 *          -> bbbbbbbb
 *          -> aaaaaaaa
 *          -> bc 
 * (+) -> 1 or more instances of left
 *      b+ -> 1 or more instances of b
 *          ->bbbbb
 *          -> bc
 * 
 * .* -> 0 or more instances of anything
 * .+ -> 1 or more instances of anything
 * 
 */