//describe a quien voy testear
describe('cipher', () => {
  //it (quem voy a testear)
  it('debería ser un objeto', () => {
    //assert (es mi comparacion) --> view/Terminal (deberia resultar en 100% todo) 
    //tiene que estar adentro de la carpeta creada con GIT GUI
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG")});

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode(33, "abcdefghijklmnopqrstuvwxyz"), "hijklmnopqrstuvwxyzabcdefg")});

    it('debería retornar "3456789012" para "0123456789" con offset 13', () => {
      assert.equal(cipher.encode(13,"0123456789"), "3456789012")});

    it('debería retornar "()$*#" para "$% &/" con offset 20', () => {
      assert.equal(cipher.encode(20, "$% &/"),"()$*#")});

    it('debería retornar ">@?" para "@;:" con offset 12', () => {
      assert.equal(cipher.encode(12, "@;:"),">@?")});

    it('debería retornar "]^" para "^_" con offset 5', () => {
      assert.equal(cipher.encode(5, "^_"),"]^")});

    it('debería retornar "|}~{" para "{|}~" con offset 5', () => {
      assert.equal(cipher.encode(5, "{|}~"),"|}~{")});

    it('debería retornar "é" para "é" con offset 5', () => {
      assert.equal(cipher.encode(5, "é"),"é")});

    });
  });

  

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ")});

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg"), "abcdefghijklmnopqrstuvwxyz")});

    it('debería retornar "0123456789" para "3456789012" con offset 13', () => {
      assert.equal(cipher.decode(13, "3456789012"), "0123456789")});
      
    it('debería retornar "$% &/" para "()$*#" con offset 20', () => {
    assert.equal(cipher.decode(20, "()$*#"), "$% &/")});

    it('debería retornar "@;:" para ">@?" con offset 12', () => {
      assert.equal(cipher.decode(12, ">@?"),"@;:")});

    it('debería retornar "^_" para "]^" con offset 5', () => {
      assert.equal(cipher.decode(5, "]^"),"^_")});

    it('debería retornar "{|}~" para "|}~{" con offset 5', () => {
      assert.equal(cipher.decode(5, "|}~{"),"{|}~")});

    it('debería retornar "é" para "é" con offset 5', () => {
      assert.equal(cipher.decode(5, "é"),"é")});

  });

  




