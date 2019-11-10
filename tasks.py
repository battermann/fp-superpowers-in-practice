from invoke import task

@task
def start(c):
  """
  Start presentation.
  """
  with c.cd("slides"):
    c.run("""reveal-md fp_superpowers.md -w --theme moon \
          --scripts js/all.min.js,js/WebAudioFontPlayer.js,js/elm.js,js/script.js \
          --preprocessor js/preproc.js \
          --css css/style.css""")

@task
def site(c):
   """
   Create static HTML.
   """
   with c.cd("slides"):
    c.run("""reveal-md fp_superpowers.md --theme moon \
          --scripts js/all.min.js,js/WebAudioFontPlayer.js,js/elm.js,js/script.js \
          --preprocessor js/preproc.js \
          --css css/style.css \
          --static _site \
          --absolute_url https://fp-superpowers-in-practice.surge.sh \
          --static-dirs=images""")

@task
def publish(c):
  """
  Publish static HTML site.
  """
  c.run("surge ./slides/_site/ fp-superpowers-in-practice.surge.sh")          

@task
def fmt(c):
  c.run("hfmt . -w")