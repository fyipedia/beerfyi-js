# @fyipedia/beerfyi (npm) — Beer API Client Demo
Output demo.gif

Set FontSize 20
Set Width 1000
Set Height 580
Set Shell "zsh"
Set Theme "Catppuccin Mocha"
Set TypingSpeed 30ms
Set Padding 24

Type "node"
Enter
Sleep 1s

Type "const { BeerFYI } = await import('@fyipedia/beerfyi')"
Enter
Sleep 1s

Type "const client = new BeerFYI()"
Enter
Sleep 1s

Type "// Search beer styles"
Enter
Sleep 0.5s

Type "await client.search('ipa')"
Enter
Sleep 2.5s

Type "await client.style('american-ipa')"
Enter
Sleep 2.5s

Type ".exit"
Enter
Sleep 1s
