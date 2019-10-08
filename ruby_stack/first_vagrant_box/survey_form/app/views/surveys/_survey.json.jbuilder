json.extract! survey, :id, :name, :location, :language, :comment, :created_at, :updated_at
json.url survey_url(survey, format: :json)
