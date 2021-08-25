from flask import Flask, jsonify, send_file, request
from flask_cors import CORS, cross_origin

from jinja2 import Template
from weasyprint import HTML, CSS

from config import DevConfig


app = Flask(__name__)
CORS(app, origins=['http://localhost:1337'])
app.config.from_object(DevConfig)

@app.route('/')
def home():
    #filename = "ThomasDexter202101.pdf"

    return jsonify({'hello': 'world'})
    #return send_file(filename)


@app.route('/resume/pdf', methods=['POST'])
#@cross_origin(origin="localhost", allow_headers=['Content-Type'])
def make_resume():
    """
    This route accepts a JSON body payload containing resume data.

    It should use weasyprint to compile the resume and return a PDF.
    """
    # Get request body
    json_data = request.json
    print(json_data)

    # Get resume template html string
    template_filename = "./templates/basic.html"
    template_html = ""
    with open(template_filename, 'r') as f:
        template_html = f.read()

    # Get resume template css string
    template_css_filename = "./templates/basic.css"
    template_css = ""
    with open(template_css_filename, 'r') as f:
        template_css = f.read()

    # Use request data to compile Jinja2 template
    template_context = json_data
    template = Template(template_html)
    rendered_template = template.render(template_context)

    # Use compiled Jinja template to generate PDF w/ Weasyprint
    resume_filename = 'resume.pdf'
    resume_path = '/tmp/' + resume_filename
    HTML(string=rendered_template).write_pdf(
        resume_path,
        stylesheets=[CSS(string=template_css)]
    )

    # Send back the generated PDF
    return send_file(resume_path)
    #response = send_file(resume_path)
    #response.headers.add('Access-Control-Allow-Origin', '*')
    #return response


if __name__ == '__main__':
    app.run(host='0.0.0.0')
