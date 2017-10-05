{
  var YYSTATE = YY_START;

  switch ($avoiding_name_collisions) {
    case 0:
      break;

    case 1:
      return 6;
      break;

    case 2:
      yy_.yytext = yy_.yytext.substr(1, yy_.yyleng - 2);
      return 4;
      break;

    case 3:
      return 17;
      break;

    case 4:
      return 18;
      break;

    case 5:
      return 23;
      break;

    case 6:
      return 24;
      break;

    case 7:
      return 22;
      break;

    case 8:
      return 21;
      break;

    case 9:
      return 10;
      break;

    case 10:
      return 11;
      break;

    case 11:
      return 8;
      break;

    case 12:
      return 14;
      break;

    case 13:
      return "INVALID";
      break;
  }
}
