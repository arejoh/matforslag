---
layout: default
title: Oversikt 
---

## Supper

{% for p in site.pages  %}
{% if p.category == "suppe" %}
  - {{ p.title  }} [handleliste]({{ site.baseurl }}{{ p.url }})
{% endif %}
{% endfor %}
- Chorizo, kikerter og chili [oppskrift](http://trinesmatblogg.no/2014/06/10/smakfull-suppe-med-chorizo-kikerter-og-chili/)
- Linsesuppe med bacon og rotgrønnsaker [oppskrift](http://trinesmatblogg.no/2014/03/12/linsesuppe-med-bacon/)

## Fisk

{% for p in site.pages  %}
{% if p.category == "fisk" %}
  - {{ p.title  }} [handleliste]({{ site.baseurl }}{{ p.url }})
{% endif %}
{% endfor %}
- Laks i tortilla
- Lettsaltet torsk med gulrot, bacon og smør

## Kjøtt

- Bratwurst med linsegryte og sellerirotpure
- Kjøttkaker med gulrotstuing
- Kylling bryst med potetmos og grønnsaksaus
- Svinefilet med potetmos eller ris og grønnsaksaus
- Svinekoteletter med stekte grønnsaker

## Pasta o.l.

- Spaghetti bolognaise [handleliste](handlelister/spaghetti_bolognaise/)
- Pasta med bacon og grønnsaker [handleliste](handlelister/pasta_bacon_grsak)
- Cous-cous med kylling
- Nudler med kylling, grønnsaker og asiatisk saus
